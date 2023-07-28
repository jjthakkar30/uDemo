import { Component, OnChanges, OnInit } from '@angular/core';
import { loginService } from '../../api/services/login.service';
import { Router } from '@angular/router';
import { IUser } from '../../api/services/user.service';
import { faAngleDown, faGaugeHigh, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
	constructor(private _loginService: loginService, private router: Router) {}

	isUserLoggedIn!: boolean;
	uName!: string;
	uID!: number;

	angleIcon = faAngleDown;
	dashboardIcon = faGaugeHigh;
	profileIcon = faUser;
	logOutIcon = faArrowRightFromBracket;

	ngOnInit(): void {
		this._loginService.isUserLoggedIn.subscribe((value: boolean) => {
			this.isUserLoggedIn = value;
		});
	}

	ngOnChanges(): void {
		if (this.isUserLoggedIn) {
			this.uName = this._loginService.currentUser.name;
			console.log(this.uName);
			this.uID = this._loginService.currentUser.id;
		}
	}

	onSignOut() {
		this._loginService.userLogOut();
	}
}
