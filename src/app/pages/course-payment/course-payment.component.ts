import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse, courseService } from 'src/app/shared/api/services/course.service';
import { loginService } from 'src/app/shared/api/services/login.service';
import { userService } from 'src/app/shared/api/services/user.service';

@Component({
  selector: 'app-course-payment',
  templateUrl: './course-payment.component.html',
  styleUrls: ['./course-payment.component.scss']
})
export class CoursePaymentComponent implements OnInit{
	courseID: number = 0;
	course !: ICourse;
	moduleID!: number;
	videoID!: number;

	constructor(private _route: ActivatedRoute, private _courseService: courseService, private _userService: userService, private _loginService: loginService, private router: Router, private injector: Injector) {}

	ngOnInit(): void {
		this.courseID = +this._route.snapshot.params['course_id'];
		this.course = this._courseService.getCourse(this.courseID);
		this.moduleID = this.course.modules[0].id;
		this.videoID = this.course.modules[0].content[0].id;
	}
	
	onEnrollCourse(courseID: number) {
		if (this._loginService.isAunthenticated()) {
			const uService: userService = this.injector.get(userService);
			uService.enrollUserToCourse(courseID);
			this.router.navigate(['course', courseID]);
		}
	}
}
