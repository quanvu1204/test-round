import { AxiosInstance, AxiosResponse } from 'axios';

export interface UserDTO {
  username: string;
  password: string;
}

export default class AuthService {
  constructor(private axios: AxiosInstance) {}

  login = async ({ username, password }: UserDTO): Promise<AxiosResponse<UserDTO>> => {
    console.log('username', username);
    console.log('password', password);

    return new Promise((res) => {
      setTimeout(() => {
        res({ username, password });
      }, 10000);
    }) as any;

    // eslint-disable-next-line no-unreachable
    return this.axios.get('/me');
  };
}
