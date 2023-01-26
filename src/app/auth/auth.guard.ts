import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientServiceService } from '../modules/clientmodule/client-service.service';
import { UserAuthService } from '../modules/clientmodule/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: ClientServiceService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const role = route.data['roles'] as Array<string>;
      if (role) {
        const match = this.userService.roleMatch(role);
        if (match) {
          return true;
        } else {
          this.router.navigateByUrl('/error403');
          return false;
        }
      }
    }
    

    this.router.navigateByUrl('/user/login');
    return false;
  }
}