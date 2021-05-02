import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConditionsService } from './conditions.service';
import { JwtGuard } from '../auth/jwt.guard.decorator'
import { ApiTags } from '@nestjs/swagger';

@Controller('conditions')
@ApiTags('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService) { }

  @Get()
  @JwtGuard()
  async indexConditions() {
    return await this.conditionsService.indexConditions();
  }
}
