import { Component } from '@angular/core';
import { loginService } from 'src/app/shared/api/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	constructor(private _loginService: loginService) {}

	onUserLogin() {
		let email = (<HTMLInputElement>document.getElementById('login-email')).value;
		let pw = (<HTMLInputElement>document.getElementById('login-pw')).value;
		this._loginService.userLogIn(email, pw);
	}
}
