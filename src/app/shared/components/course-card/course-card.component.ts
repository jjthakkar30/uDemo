import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/api/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
	constructor(private router: Router) {}

	@Input() courseData !: ICourse;
	@Input() ifEnrolled !: boolean;
	@Input() courseProgress !: number;

	onCardClick(): void {
		if(this.ifEnrolled) {
			this.router.navigate
		} else

		this.router.navigate(
			this.ifEnrolled ?
			['/watch/course',
			this.courseData.id,
			'module',
			1,
			'video',
			1]
			 :
			['course', this.courseData.id]
		);
	}
}
