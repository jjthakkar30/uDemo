import { Inject, Injectable, Injector, Output } from "@angular/core";
import { IUser, userService } from "./user.service";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class loginService {
	currentUser!: IUser;
	HasUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
	isUserLoggedIn = this.HasUserLoggedIn.asObservable();

	setIfLoggedIn = (value: boolean) => this.HasUserLoggedIn.next(value);

	constructor(private injector: Injector, private router: Router) {}

	isAunthenticated(): boolean {
		return this.HasUserLoggedIn.value;
	}



	userLogIn(email: string, pw: string) {
		const uService: userService = this.injector.get(userService);
		let user:IUser = uService.getUser(email, pw);
		
		if (user) {
			this.currentUser = user;
			this.setIfLoggedIn(true);
			this.router.navigate(['/']);
			
		} else {
			alert('Invalid email or password');
		}
	}
	
	userLogOut() {
		this.setIfLoggedIn(false);
		this.router.navigate(['/']);
	}
	
	userSignUp(name: string, email: string, pw: string) {
		const uService: userService = this.injector.get(userService);
		uService.createUser(name, email, pw);
		this.setIfLoggedIn(true);
		this.currentUser = uService.getUser(email, pw);
	}
}