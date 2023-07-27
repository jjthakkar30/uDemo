import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/api/services/course.service';

@Component({
  selector: 'app-course-showcase',
  templateUrl: './course-showcase.component.html',
  styleUrls: ['./course-showcase.component.scss']
})
export class CourseShowcaseComponent {
	@Input({}) ifContent!: boolean;
	@Input({}) course!: ICourse;

	showcaseOptions: string[] = [
		'Description', 'Content', 'Reviews'
	];

	showcaseMode: string = this.showcaseOptions[0];

	changeShowcaseMode(option: string) {
		this.showcaseMode = option;
	}
}
