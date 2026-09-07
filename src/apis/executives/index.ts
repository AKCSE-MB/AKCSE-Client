import http from '@/apis/http';

/** Mirrors `ExecutiveResponseDto` in AKCSE-Server (GET /v1/executives). */
export interface ExecutiveResponseDto {
  id: number;
  name: string;
  /** e.g. "President", "Developer". */
  position: string;
  /** Short self introduction. Empty string when not set. */
  bio: string;
  /** Empty string when not set. */
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const executivesRepository = () => {
  return {
    /** 전체 임원진. */
    getExecutives: async (): Promise<ExecutiveResponseDto[]> => {
      return await http.get('/apis/v1/executives');
    },
  };
};

export default executivesRepository;
