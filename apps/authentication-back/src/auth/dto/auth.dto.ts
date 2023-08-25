import { ApiProperty } from '@nestjs/swagger';
import {
  SignInDTO as SignInDTODomain,
  SignUpDTO as SignUpDTODomain
} from '@authentication/domain';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDTO implements SignUpDTODomain {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
export class SignInDTO implements SignInDTODomain {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
