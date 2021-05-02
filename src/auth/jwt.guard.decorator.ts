import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

export function JwtGuard() {
	return applyDecorators(UseGuards(AuthGuard('jwt')), ApiBearerAuth());
}
