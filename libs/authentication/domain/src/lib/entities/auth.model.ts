export interface AuthEntity {
  id:number;
  email: string;
  password: string;
  status: boolean;
  createdAt:Date;
  updatedAt:Date;
}
export interface SignUpDTO {
  name:string;
  lastName:string;
  email:string;
  password:string;
}
export interface SignInDTO {
  email:string;
  password:string;
}
export interface AuthResponse {
  access_token: string
}
