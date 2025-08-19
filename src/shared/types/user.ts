export interface IUser {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  country?: string;
  password: string; // hashed
  createdAt: Date;
  userType?: "admin" | "user" | "client";
  updatedAt: Date;
}
