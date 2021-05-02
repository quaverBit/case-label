import { createParamDecorator, ForbiddenException } from '@nestjs/common';

export const User = createParamDecorator((data, ctx) => {
  const {user} = ctx.switchToHttp().getRequest();
  if (!user) {
    throw new ForbiddenException();
  }
  return { id: user.userId, username: user.username };
});
