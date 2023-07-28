import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ICourse, courseService } from 'src/app/shared/api/services/course.service';
import { loginService } from 'src/app/shared/api/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnChanges {
	constructor(private _courseService: courseService, private _loginService: loginService) {}

	isUserLoggedIn!: boolean;

	searchIcon = faSearch;


	courseList: ICourse[] = [];
	filteredCourseList!: ICourse[];
	searchTxt!: string;
	category!: string;
	difficulty!: string;
	duration!: string;
	

	ngOnInit(): void {
		this._loginService.isUserLoggedIn.subscribe((value: boolean) => this.isUserLoggedIn = value);
		this.courseList = this._courseService.getCourses();
		this.filteredCourseList = this.courseList;
	}

	filterCourses(): void {
		this.filteredCourseList = this.courseList
			.filter((course: ICourse) => course.title.toLowerCase().includes(this.searchTxt.toLowerCase()))
			.filter((course: ICourse) => course.categories.includes(this.category === 'All' ? '' : this.category))
			.filter((course: ICourse) => this.difficulty === 'All' || course.difficulty === this.difficulty);
	}

	ngOnChanges(): void {
		this.filterCourses();
	}
}
