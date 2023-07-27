import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ICourse, courseService } from 'src/app/shared/api/services/course.service';
import { loginService } from 'src/app/shared/api/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	constructor(private _courseService: courseService, private _loginService: loginService) {}

	isUserLoggedIn!: boolean;

	searchIcon = faSearch;


	courseList: ICourse[] = this._courseService.getCourses();
	

	ngOnInit(): void {
		this._loginService.isUserLoggedIn.subscribe((value: boolean) => this.isUserLoggedIn = value);
	}
}
