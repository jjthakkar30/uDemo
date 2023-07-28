import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {IReview } from '../../api/services/course.service';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.scss']
})
export class CourseReviewComponent implements OnInit {
	@Input({}) courseID!: number;
	@Input({}) reviews!: Array<IReview>;

	courseRating: number = 4.5;

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

	ngOnInit(): void {
		console.log(this.courseID);
		console.log(this.reviews);
	}
}
