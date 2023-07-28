import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse, courseService } from 'src/app/shared/api/services/course.service';
import { IUser, userService, IEnrolledCourse } from 'src/app/shared/api/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit{
	userID: number = 0;
	currentUser!: IUser;
	enrolledCourses: ICourse[] = [];
	courseProgressArray: number[] = [];

	constructor(private _userService: userService, private _courseService: courseService, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		this.userID = +this._route.snapshot.params['user_id'];
		this.enrolledCourses = (this._userService.getUserByID(this.userID)).enrolled_courses.map((course: IEnrolledCourse) => {
			this.courseProgressArray.push(course.progress);
			return this._courseService.getCourse(course.id);
		} )
	}
}
