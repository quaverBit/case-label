import { CanActivate, Injectable, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if(!request.get('Authorization')) {
      throw new ForbiddenException();
    }
    return true;
  }
}