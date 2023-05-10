import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller({})
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('auth/signup')
  signUp(@Body() dto:any) {
    console.log(dto)
    return this.authService.signUp();
  }

  @Post('auth/signin')
  signIn() {
    return this.authService.signIn();
  }
}
