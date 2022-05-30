import ApiClient from './apiClient';
import AuthService from './controllers/auth/AuthService';

export class ApiService {
  public auth: AuthService;

  constructor() {
    this.auth = new AuthService(ApiClient);
  }
}

const api = new ApiService();

export default api;
