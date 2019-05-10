import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    return new Promise(resolve => {
      let sub = this.authService.getUser().subscribe(user=>{
        if(user!=null) resolve(true)
        else resolve(this.router.parseUrl("/admin/login"))
        if(sub) sub.unsubscribe()
      })
    })
  }
}
