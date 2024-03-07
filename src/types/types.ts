type AuthStatus = 'authenticated' | 'not-authenticated'

export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  allowedCategories?: string[];
}

export interface Category {
  id?: string;
  name?: string;
  slug?: string;
  logo?: string;
}

export interface Movie {
  id?: string;
  slug?: string;
  title?: string;
  synopsis?: string;
  categoryId?: string;
  image?: string;
  video?: string;
  premier?: boolean;
  trailer?: string;
}

export interface PropsAuth {
  status: AuthStatus;
  user: User;
}

export interface UserLogin {
  accessToken?: string;
  user?: User;
}

export interface LoadContentState {
  categories: Category[];
  movies: Movie[];
}

export interface MoviesByCategory {
  id: string;
  name: string;
  slug: string;
  logo: string;
  movies: Movie[];
}