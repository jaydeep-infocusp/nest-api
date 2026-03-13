import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(dto: CreateUserDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(dto: CreateUserDto) {
    return this.authService.signin(dto);
  }

  @Get('signout')
  signout() {
    return this.authService.signout();
  }
}
