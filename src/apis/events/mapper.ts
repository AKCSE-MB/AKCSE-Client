import { eventsRepository, type EventResponseDto } from '@/apis/events';
import eventSource from '@/assets/data/events.json';
import { getFormattedTime } from '@/utils/formatUtil';

export interface EventData {
  id: number;
  title: string;
  startDateTime: string;
  image: string;
  images?: string[];
  description: string;
  rsvpLink: string;
  location?: string;
  timeDisplay?: string;
  dateDisplay?: string;
  deadline?: string;
  tags?: string[];
  featuredTags?: string[];
  statusBadge?: string;
  isOrigin?: boolean;
}

/**
 * Presentation-only fields that GET /v1/events does not carry yet. They keep
 * living in events.json and are merged onto the API payload by event title.
 * Drop this layer once the backend DTO exposes them.
 */
type DisplayFields = Pick<
  EventData,
  | 'images'
  | 'tags'
  | 'featuredTags'
  | 'statusBadge'
  | 'isOrigin'
  | 'timeDisplay'
  | 'dateDisplay'
  | 'deadline'
>;

/** AKCSE MB is based in Winnipeg; the API returns UTC timestamps. */
const EVENT_TIME_ZONE = 'America/Winnipeg';

const localEvents = eventSource.events as unknown as EventData[];

const normalizeTitle = (title: string) => title.trim().toLowerCase();

function pickDisplayFields(event: EventData): DisplayFields {
  const {
    images,
    tags,
    featuredTags,
    statusBadge,
    isOrigin,
    timeDisplay,
    dateDisplay,
    deadline,
  } = event;

  return {
    images,
    tags,
    featuredTags,
    statusBadge,
    isOrigin,
    timeDisplay,
    dateDisplay,
    deadline,
  };
}

const displayFieldsByTitle = new Map(
  localEvents.map((event) => [
    normalizeTitle(event.title),
    pickDisplayFields(event),
  ]),
);

const displayFieldsById = new Map(
  localEvents.map((event) => [event.id, pickDisplayFields(event)]),
);

function formatTimeRange(startDateTime: string, endDateTime: string) {
  const start = new Date(startDateTime);
  const end = new Date(endDateTime);

  const format = (date: Date) =>
    date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: EVENT_TIME_ZONE,
    });

  if (Number.isNaN(end.getTime())) return getFormattedTime(start);

  return `${format(start)} – ${format(end)}`;
}

function toEventData(dto: EventResponseDto): EventData {
  const display =
    displayFieldsByTitle.get(normalizeTitle(dto.title)) ??
    displayFieldsById.get(dto.id) ??
    {};

  // 서버는 이미지가 없으면 빈 문자열을 내려준다.
  const fullImage = dto.imageUrl;

  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    startDateTime: new Date(dto.startDateTime).toISOString(),
    image: fullImage,
    location: dto.location,
    rsvpLink: dto.rsvpLink,
    ...display,
    // Fall back to the API's single image so a brand new event still shows
    // something in the timeline photo grid.
    images: display.images ?? (fullImage ? [fullImage] : undefined),
    timeDisplay:
      display.timeDisplay ??
      formatTimeRange(dto.startDateTime, dto.endDateTime),
  };
}

/**
 * Events for the /events page. Falls back to the bundled events.json when the
 * API is unreachable so the page still renders instead of returning a 500.
 */
export async function getEvents(): Promise<EventData[]> {
  try {
    const events = await eventsRepository().getEvents();
    return events.map(toEventData);
  } catch (error) {
    console.error('[events] GET /v1/events failed, using local data', error);
    return localEvents;
  }
}
