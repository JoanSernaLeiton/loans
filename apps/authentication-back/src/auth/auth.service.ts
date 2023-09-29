import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { FindOptionsSelect, Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { SignInDTO, SignUpDTO } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  private readonly saltOrRounds: number = 10;
  private readonly logger = new Logger(AuthService.name);
  @InjectRepository(Auth) private readonly authRepository: Repository<Auth>;

  constructor(
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,

  ) {}

  async signUp(signUpDTO: SignUpDTO): Promise<{ access_token: string }> {
    this.logger.log('Auth sign up dto', JSON.stringify(signUpDTO));
    try {
      const user = await this.verifyUserExists(signUpDTO.email, {});
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

  async verifyUserExists(
    email: string,
    fields: FindOptionsSelect<Auth>
  ): Promise<Auth> {
    return await this.authRepository.findOne({
      where: { email },
      select: fields,
    });
  }

  async signIn(signInDTO: SignInDTO): Promise<{ access_token: string }> {
    try {
      const authFound = await this.verifyUserExists(signInDTO.email, {
        id: true,
        email: true,
        password: true,
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

  async getUserDetail(request: Request) {
    this.logger.log('user', request['user']['email']);
    const email = request['user']['email'];
    return await this.verifyUserExists(email, {
      email: true,
      name: true,
      lastName: true,
    });
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

  async sms() {
    const token ="Basic Qk9SQXFiYW5vcHJvbW9jaW9uYWw6MUEzMWwj";
    const request$ = this.httpService.post(
      `https://restaws.inalambria.com/mtmessage`,
      {
        "MessageText": "Pruba",
        "Type": 1,
        "Devices": "3177272074",
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    );
    return await firstValueFrom(request$);
  }
}
