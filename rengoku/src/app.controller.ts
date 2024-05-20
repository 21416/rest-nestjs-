import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DatabaseService,
  ) {}

  @Get()
  async getHello() {
    const { data } = await axios.get<any>('http://localhost:1337/messageLogs');
    console.log('rest api')
    return {
      messageLogs: data,
    };
  }
}
