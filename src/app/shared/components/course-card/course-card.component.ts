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

	goToCourse(id: number) {
		
	}
}
