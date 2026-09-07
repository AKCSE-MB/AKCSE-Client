import {
  executivesRepository,
  type ExecutiveResponseDto,
} from '@/apis/executives';
import teamSource from '@/assets/data/team.json';

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TeamData {
  /** Executive Board — 개발자를 제외한 임원진. */
  executives: TeamMemberData[];
  /** Development Team. */
  developers: TeamMemberData[];
}

/**
 * GET /v1/executives 는 개발팀을 따로 구분하지 않는다. position 으로 갈라낸다.
 * 서버 스키마에 팀 구분 컬럼이 생기면 이 상수는 지운다.
 */
const DEVELOPER_POSITION = 'developer';

const localMembers: TeamMemberData[] = [
  ...teamSource.executive,
  ...teamSource.dev,
];

const normalizeName = (name: string) => name.trim().toLowerCase();

/**
 * 사진은 아직 DB(image_url)에 다 안 올라가 있어서, 값이 비면 번들된 team.json 사진으로
 * 이름을 맞춰 채운다. image_url 이 채워지면 이 맵과 fallback 은 지워도 된다.
 * (bio 는 이제 API 가 내려주므로 더 이상 병합하지 않는다.)
 */
const localImageByName = new Map(
  localMembers.map((member) => [normalizeName(member.name), member.image]),
);

function toTeamMember(dto: ExecutiveResponseDto): TeamMemberData {
  return {
    id: String(dto.id),
    name: dto.name,
    role: dto.position,
    bio: dto.bio,
    image:
      dto.imageUrl || (localImageByName.get(normalizeName(dto.name)) ?? ''),
  };
}

const isDeveloper = (member: TeamMemberData) =>
  normalizeName(member.role) === DEVELOPER_POSITION;

/** API 가 닿지 않을 때 쓰는 번들 데이터. */
const localTeam: TeamData = {
  executives: teamSource.executive,
  developers: teamSource.dev,
};

/**
 * Team members for /our-team and the home carousel. Falls back to the bundled
 * team.json when the API is unreachable so the page still renders.
 */
export async function getTeam(): Promise<TeamData> {
  try {
    const members = (await executivesRepository().getExecutives()).map(
      toTeamMember,
    );

    return {
      executives: members.filter((member) => !isDeveloper(member)),
      developers: members.filter(isDeveloper),
    };
  } catch (error) {
    console.error(
      '[executives] GET /v1/executives failed, using local data',
      error,
    );
    return localTeam;
  }
}
