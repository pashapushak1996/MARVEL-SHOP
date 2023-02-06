type TypeUserRoles = 'user' | 'admin';

export interface IUser {
  firstName: string,
  lastName: string,
  userPhoto: string,
  email: string,
  role: TypeUserRoles;
}
