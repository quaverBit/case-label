import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class CasesSolveDto {
  @ApiProperty({ type: [String] })
  @IsArray()
  conditions: string[];
}
