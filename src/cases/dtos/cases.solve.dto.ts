import { IsArray, IsString } from "class-validator";

export class CasesSolveDto {
  @IsString()
  caseId: string;

  @IsArray()
  conditions: string[];
}
