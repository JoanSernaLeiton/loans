import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { SignInDTO, SignUpDTO } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly saltOrRounds: number = 10;
  private readonly logger = new Logger(AuthService.name);
  @InjectRepository(Auth) private readonly authRepository: Repository<Auth>;

  constructor(private readonly jwtService: JwtService) {}

  async signUp(signUpDTO: SignUpDTO): Promise<{ access_token: string }> {
    this.logger.log('Auth sign up dto', JSON.stringify(signUpDTO));
    try {
      const user = await this.verifyUserExists(signUpDTO.email);
      if (user) {
        throw new NotAcceptableException();
      }
      const password = signUpDTO.password;
      const hash = await bcrypt.hash(password, this.saltOrRounds);
      await this.authRepository.save({
        ...signUpDTO,
        password: hash,
      });
      return this.signIn({
        email: signUpDTO.email,
        password: signUpDTO.password,
      });
    } catch (error) {
      this.logger.warn('error when sign up user', error);
      if (error instanceof NotAcceptableException) {
        throw new NotAcceptableException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async verifyUserExists(email: string): Promise<Auth> {
    return await this.authRepository.findOne({
      where: { email },
    });
  }

  async signIn(signInDTO: SignInDTO): Promise<{ access_token: string }> {
    try {
      const authFound = await this.authRepository.findOne({
        where: { email: signInDTO.email },
      });

      this.validateAuthentication(authFound, signInDTO.password);

      const token = await this.generateAuthToken(authFound.id, authFound.email);
      return { access_token: token };
    } catch (error) {
      this.handleSignInError(error);
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getAuths() {
    const auths = await this.authRepository.find();
    this.logger.debug('auth', auths);
    return auths;
  }

  private validateAuthentication(
    authFound: Auth | undefined,
    password: string
  ): void {
    if (!authFound || !bcrypt.compareSync(password, authFound.password)) {
      throw new UnauthorizedException();
    }
  }

  private generateAuthToken(
    userId: number,
    userEmail: string
  ): Promise<string> {
    const payload = { sub: userId, username: userEmail };
    return this.jwtService.signAsync(payload);
  }

  private handleSignInError(error: Error): void {
    this.logger.warn('Error when signing in user', error);
  }
}
