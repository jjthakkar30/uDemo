import { Component } from '@angular/core';
import { loginService } from 'src/app/shared/api/services/login.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
	constructor(private _loginService: loginService) {}

	SignUp() {
		let name = (<HTMLInputElement>document.getElementById('sign-up-name')).value;
		let email = (<HTMLInputElement>document.getElementById('sign-up-email')).value;
		let pw = (<HTMLInputElement>document.getElementById('sign-up-pw')).value;
		this._loginService.userSignUp(name, email, pw);

	}
}
