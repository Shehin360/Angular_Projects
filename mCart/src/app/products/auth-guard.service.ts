// route guard implementation for Products page
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService  {

  constructor(private router: Router) { }

  // Products page will be displayed only if user logs in
  canActivate() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
