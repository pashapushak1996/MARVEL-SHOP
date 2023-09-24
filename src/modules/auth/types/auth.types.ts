export type UserRegisterData = {
  username:string,
  email: string,
  password: string;
}

export type UserLoginData = Omit<UserRegisterData,'username'>;