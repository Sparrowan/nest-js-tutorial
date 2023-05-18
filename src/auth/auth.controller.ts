import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller({})
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('auth/signup')
  signUp(@Body() dto:AuthDto) {
    return this.authService.signUp(dto);
  }
  @Post('auth/signin')
  signIn() {
    return this.authService.signIn();
  }
}
