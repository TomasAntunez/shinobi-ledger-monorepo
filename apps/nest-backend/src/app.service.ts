import { Injectable } from '@nestjs/common';
import { Clock } from '@shinobi-ledger/shared';
import { CurrentDateResponseDto } from './dtos/current-date-response.dto';

@Injectable()
export class AppService {
  getCurrentDate(): CurrentDateResponseDto {
    return new CurrentDateResponseDto(Clock.create().toISOString());
  }
}
