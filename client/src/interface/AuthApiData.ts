import { User } from './User';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}

export interface GetClientsApiDataSuccess {
  clients: [
    {
      id: number;
      property: string;
      debt: number;
    }
  ]
}

export interface GetClientsApiData {
  error?: { message: string };
  success?: GetClientsApiDataSuccess;
}
