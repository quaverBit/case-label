import { createParamDecorator, ForbiddenException } from '@nestjs/common';

export const User = createParamDecorator((data, ctx) => {
  const req = ctx.switchToHttp().getRequest();
  const Authorization = req.get('Authorization');
  if (!Authorization) {
    throw new ForbiddenException();
  }
  return Authorization;
});
