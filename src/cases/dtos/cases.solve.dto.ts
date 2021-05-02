import { IsArray, IsString } from 'class-validator';

export class CasesSolveDto {
  @IsArray()
  conditions: string[];
}
