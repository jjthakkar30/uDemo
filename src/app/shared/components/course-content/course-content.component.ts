import { transition, trigger, state, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faFileVideo, faQuestion, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss'],
	animations: [
		trigger(
			'slideAnimation',
			[
				transition(
					':enter',
					[
						style({transform: 'translateY(-100%)', 'opacity': 0}),
						animate('0.1s ease-in-out', style({transform: 'translateY(-5%)', 'opacity': 0})),
						animate('0.2s ease-in-out', style({transform: 'translateY(0)', 'opacity': 1})),
					]
				),
				transition(
					':leave',
					[
						style({transform: 'translateY(0)', 'opacity': 1}),
						animate('0.2s ease-in-out', style({transform: 'translateY(-5%)', 'opacity': 0})),
						animate('0.1s ease-in-out', style({transform: 'translateY(-100%)', 'opacity': 0}))
					]
				),
			]
		)
	]
})
export class CourseContentComponent implements OnInit {
	@Input({}) modules!: any;
	@Input({}) ifEnrolled!: Boolean;
	toggles!: Array<boolean>;

	arrowIcon = faAngleDown;
	videoIcon = faFileVideo;
	quizIcon = faQuestion;
	assignmentIcon = faFile;

	ngOnInit(): void {
		this.toggles = Array(this.modules.length).fill(false);
	}
	
	toggleModule(id: number):void {
		this.toggles[id-1] = !this.toggles[id-1];
	}
}
