import { Injectable, numberAttribute } from "@angular/core";
import { loginService } from "./login.service";
import { Router } from "@angular/router";

export interface IEnrolledCourse {
	id: number,
	isFinished: boolean,
	progress: number,
	certiURL: string
}

export interface IUser {
	id: number,
	name: string,
	email: string,
	pw: string,
	enrolled_courses: Array<IEnrolledCourse>
}

@Injectable({
	providedIn: 'root'
})
export class userService {
	constructor(private _loginService: loginService, private router: Router) {}

	getUser(email: string, pw: string): IUser {
		return Users.filter((user: IUser) => user.email === email && user.pw === pw)[0];
	}

	getUserByID(user_id: number): IUser {
		return Users.filter((user: IUser) => user.id === user_id)[0];
	}

	getUserCourseDetails(user: IUser, courseID: number): IEnrolledCourse {
		return user.enrolled_courses.filter((course: IEnrolledCourse) => course.id == courseID)[0];
	}

	createUser(name: string, email: string, pw: string) {
		Users.push(
			{
				id: Users.length + 1,
				name: name,
				email: email,
				pw: pw,
				enrolled_courses: Array<IEnrolledCourse>()
			}
		);
		this.router.navigate(['/']);
	}

	enrollUserToCourse(course_id: number) {
		const enCourse: IEnrolledCourse = {
			id: course_id,
			isFinished: false,
			progress: 0,
			certiURL: ''
		};

			Users[this._loginService.currentUser.id - 1].enrolled_courses.splice(0, 0, enCourse);
		
	}

	getIfEnrolled(course_id: number): boolean {
		if(this._loginService.currentUser) {
		let eCourses = this._loginService.currentUser.enrolled_courses;
		for(let i of eCourses) {
			if (course_id === i.id) return true;
		}
	}
		return false;
	}
}

const Users: IUser[] = [
	{
		id: 1,
		name: 'Jinil Thakkar',
		email: 'j@g.com',
		pw: 'open',
		enrolled_courses: [
			{
				id: 1,
				isFinished: false,
				progress: 35,
				certiURL: ''
			},
			{
				id: 3,
				isFinished: false,
				progress: 75,
				certiURL: ''
			},
			{
				id: 5,
				isFinished: false,
				progress: 90,
				certiURL: ''
			},
			{
				id: 7,
				isFinished: false,
				progress: 20,
				certiURL: ''
			},
		]
	}
];