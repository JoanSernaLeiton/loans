import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post, UseGuards,
  Request
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDTO, SignUpDTO } from './dto/auth.dto';
import { Auth } from './entities/auth.entity';
import { AuthGuard } from "./guard/auth.guard";

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
  @ApiOperation({ summary: 'SMS Text' })
  @ApiResponse({ status: 200, description: 'SMS Text' })
  @HttpCode(HttpStatus.OK)
  @Post('sms')
  async sms(): Promise<unknown> {
    return await this.authService.sms();
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'get user detail' })
  @ApiResponse({ status: 200, description: 'Get user detail successfully' })
  @HttpCode(HttpStatus.OK)
  @Get('user')
  getUserDetail(@Request() req:Request): Promise<Auth> {
    return this.authService.getUserDetail(req);
  }
}
