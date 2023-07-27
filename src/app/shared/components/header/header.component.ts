import { AfterContentChecked, Component, OnChanges, OnInit } from '@angular/core';
import { loginService } from '../../api/services/login.service';
import { Router } from '@angular/router';
import { IUser } from '../../api/services/user.service';
import { faAngleDown, faGaugeHigh, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

			this.uName = typeof this._loginService.currentUser?.name === 'string' ? this._loginService.currentUser.name : '';
			this.uID = typeof this._loginService.currentUser?.id === 'number' ? this._loginService.currentUser?.id : -1;
		});
	}

	onSignOut() {
		this._loginService.userLogOut();
	}
}
