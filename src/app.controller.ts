import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //* Controller에서 Req, Res를 안넣어주는 것이, Test에서 Mocking 안해도 되서 더 좋다.

  @Get('test')
  testHello(): string {
    const user = 'user';
    //* 이렇게만 해줘도, response를 알아서 잘 만들어줌

    return user;
  }
  @Get('coco')
  getCoco(): string {
    return process.env.TEXT;
  }
  @Get('chris')
  getChrisInfo(): string {
    return this.appService.getOwnerInfo();
  }
}
