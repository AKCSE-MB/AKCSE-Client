import { ExecutiveResponse } from '@/types';

const DEVELOPER_POSITION = /developer/i;

export const isDeveloper = (member: ExecutiveResponse) =>
  DEVELOPER_POSITION.test(member.position);

export const splitTeam = (members: ExecutiveResponse[]) => ({
  executive: members.filter((member) => !isDeveloper(member)),
  dev: members.filter(isDeveloper),
});
