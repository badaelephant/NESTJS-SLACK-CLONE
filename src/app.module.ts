import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

//* 중요!! 이렇게 했을때, 장점! => async 로 axios를 통해 config값을 가져올 수 있다.
const getCustomEnv = () => {
  return {
    ID: 'cystmax',
    EMAIL: 'cystmax@gmail.com',
    TEXT: 'New Text!! It has been replaced',
  };
};
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getCustomEnv] })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
