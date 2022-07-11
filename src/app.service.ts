import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return this.configService.get('TEXT');
  }
  getOwnerInfo(): string {
    const id = this.configService.get('ID');
    const email = this.configService.get('EMAIL');

    return `The Owner is Chris, and his ID : ${id}, his email : ${email}`;
  }
}
