import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiResponseProperty } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard.decorator';
import { User } from '../users/user.decorator';
import { CasesService } from './cases.service';
import { CasesSolveDto } from './dtos/cases.solve.dto';

@Controller('cases')
@ApiTags('cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @JwtGuard()
  @Get()
  async getCases(@User() user: string): Promise<any> {
    return await this.casesService.getUnsolvedCases();
  }

  @JwtGuard()
  @Post(':caseId/conditions')
  async solveCase(
    @User() user: { id: string, username: string },
    @Param('caseId') caseId: string,
    @Body() { conditions }: CasesSolveDto,
  ): Promise<any> {
    return await this.casesService.solveCase(caseId, user.id, conditions);
  }
}
