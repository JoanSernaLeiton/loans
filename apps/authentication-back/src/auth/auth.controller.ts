import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDTO, SignUpDTO } from './dto/auth.dto';
import { Auth } from './entities/auth.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signUp(
    @Body() signUpDTO: SignUpDTO
  ): Promise<{ access_token: string }> {
    return this.authService.signUp(signUpDTO);
  }
  @ApiOperation({ summary: 'Sign in' })
  @ApiResponse({ status: 200, description: 'User sign in successfully' })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(
    @Body() signInDTO: SignInDTO
  ): Promise<{ access_token: string }> {
    return this.authService.signIn(signInDTO);
  }

  @ApiOperation({ summary: 'get all auths' })
  @ApiResponse({ status: 200, description: 'Get all auths successfully' })
  @HttpCode(HttpStatus.OK)
  @Get('')
  getAuths(): Promise<Auth[]> {
    return this.authService.getAuths();
  }
}
