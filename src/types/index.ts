/** Cloudinary delivery urls for a single image. */
export interface ImageResponse {
  publicId: string;
  full: string;
}

/** Every AKCSE API payload is wrapped in `{ data: ... }`. */
export interface BaseResponse<T> {
  data: T;
}

/** GET /v1/events */
export interface EventResponse {
  id: number;
  title: string;
  description: string;
  /** event fee in CAD, 0 for free events */
  fee: number;
  startDateTime: string;
  endDateTime: string;
  location: string;
  signUpDeadline: string;
  /** empty string if not set */
  rsvpLink: string;
  /** ordered, empty array if the event has no image */
  images: ImageResponse[];
  createdAt: string;
  updatedAt: string;
}

/** GET /v1/executives */
export interface ExecutiveResponse {
  id: number;
  name: string;
  position: string;
  /** empty string if not set */
  bio: string;
  image: ImageResponse | null;
  createdAt: string;
  updatedAt: string;
}
