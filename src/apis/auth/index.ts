import http from '../http';

interface PostLoginParams {
  identification: string;
  password: string;
}

interface PostLoginRes {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredAt: Date;
  refreshTokenExpiredAt: Date;
}

interface AuthRepository {
  postLogin: ({
    identification,
    password,
  }: PostLoginParams) => Promise<PostLoginRes>;
}

const authRepository = (): AuthRepository => {
  return {
    postLogin: async ({ identification, password }) =>
      await http.post<PostLoginRes, PostLoginParams>(
        '/apis/v1/account/tokens',
        {
          identification,
          password,
        },
      ),
  };
};

export default authRepository;
