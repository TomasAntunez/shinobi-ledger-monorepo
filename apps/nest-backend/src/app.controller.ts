import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentDateResponseDto } from './dtos/current-date-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCurrentDate(): CurrentDateResponseDto {
    return this.appService.getCurrentDate();
  }
}
