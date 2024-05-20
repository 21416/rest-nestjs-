import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    // const prev = new Date()
    const { data } = await axios.get('http://localhost:3005');
    return {
      messagingLogs: data,
    };
  }
}
