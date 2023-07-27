import { CanActivateFn } from '@angular/router';
import { loginService } from './login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const _loginService: loginService = inject(loginService);
	if (_loginService.isAunthenticated()) return true;

	const router: Router = inject(Router);
	router.navigate(['user-login']);
	return false;
};
