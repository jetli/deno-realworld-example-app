/** Login info for a user. */
export interface LoginInfo {
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
}
