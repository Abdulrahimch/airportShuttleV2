type role = 'client' | 'agency';

export interface User {
  email: string;
  username: string;
  role: role;
}

