import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../users/user.decorator';
import { CasesService } from './cases.service';
import { CasesSolveDto } from './dtos/cases.solve.dto';

@Controller('cases')
export class CasesController {
  constructor(private casesService: CasesService) { }

  @Get()
  async getCases(@User() user: string): Promise<any> {
    return await this.casesService.getUnsolvedCases();
  }

  @Post()
  async solveCase(@User() user: string, @Body() { caseId, conditions }: CasesSolveDto): Promise<any> {
    return await this.casesService.solveCase(caseId, user, conditions);
  }
}
