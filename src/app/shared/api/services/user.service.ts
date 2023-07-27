import { Injectable } from "@angular/core";

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
	getUser(email: string, pw: string): IUser {
		return Users.filter((user: IUser) => user.email === email && user.pw === pw)[0];
	}

	getUserCourseDetails(user: IUser, courseID: number): IEnrolledCourse {
		return user.enrolled_courses.filter((course: IEnrolledCourse) => course.id == courseID)[0];
	}

	createUser(name: string, email: string, pw: string) {
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
				progress: 50,
				certiURL: ''
			}
		]
	}
];