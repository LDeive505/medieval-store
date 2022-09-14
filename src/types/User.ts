export type User = {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
};

export type Login = {
  username: string;
  password: string;
};