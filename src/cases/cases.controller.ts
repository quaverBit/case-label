import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../users/user.decorator';
import { CasesService } from './cases.service';
import { CasesSolveDto } from './dtos/cases.solve.dto';

@Controller('cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @Get()
  async getCases(@User() user: string): Promise<any> {
    return await this.casesService.getUnsolvedCases();
  }

  @Post(':caseId')
  async solveCase(
    @User() user: string,
    @Param('caseId') caseId: string,
    @Body() { conditions }: CasesSolveDto,
  ): Promise<any> {
    return await this.casesService.solveCase(caseId, user, conditions);
  }
}
