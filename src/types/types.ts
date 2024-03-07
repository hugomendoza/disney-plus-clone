type AuthStatus = 'authenticated' | 'not-authenticated'

export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  allowedCategories?: string[];
}

export interface PropsAuth {
  status: AuthStatus
  user: User
  errorMessage?: string
}

export interface UserLogin {
  accessToken?: string;
  user?: User;
}
