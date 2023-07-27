import { Injectable, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { IUser, userService } from "./user.service";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class loginService {
	currentUser!: IUser | undefined;
	HasUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
	isUserLoggedIn = this.HasUserLoggedIn.asObservable();

	setIfLoggedIn = (value: boolean) => this.HasUserLoggedIn.next(value);

	constructor(private _userService: userService, private router: Router) {}

	isAunthenticated(): boolean {
		return this.HasUserLoggedIn.value;
	}



	userLogIn(email: string, pw: string) {
		let user:IUser = this._userService.getUser(email, pw);

		if (user) {
			this.currentUser = user;
			this.setIfLoggedIn(true);
			this.router.navigate(['/']);
			
		} else {
			alert('Invalid email or password');
		}
	}
	
	userLogOut() {
		this.currentUser = undefined;
		this.setIfLoggedIn(false);
		this.router.navigate(['/']);
	}

	userSignUp(name: string, email: string, pw: string) {
	}
}