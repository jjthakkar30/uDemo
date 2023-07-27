import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICourse, IModuleContent, courseService } from 'src/app/shared/api/services/course.service';
import { transition, trigger, style, animate } from '@angular/animations';
import { faAngleDown, faFileVideo, faQuestion, faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-watch-course',
  templateUrl: './watch-course.component.html',
  styleUrls: ['./watch-course.component.scss'],
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
export class WatchCourseComponent implements OnInit {
	courseID: number = 0;
	moduleID: number = 0;
	videoID: number = 0;
	video!: IModuleContent;
	course !: ICourse;
	ifEnrolled: boolean = true;
	toggles!: Array<boolean>;

	arrowIcon = faAngleDown;
	videoIcon = faFileVideo;
	quizIcon = faQuestion;
	assignmentIcon = faFile;

	constructor(private _route: ActivatedRoute, private _courseService: courseService, private _router: Router, private elementRef: ElementRef, private vpScroller: ViewportScroller) {}

	ngOnInit(): void {
		this.courseID = +this._route.snapshot.params['course_id'];
		this.moduleID = +this._route.snapshot.params['module_id'];
		this.videoID = +this._route.snapshot.params['video_id'];
		this.course = this._courseService.getCourse(this.courseID);
		this.video = this.course.modules[this.moduleID - 1].content[this.videoID - 1];

		this.toggles = Array(this.course.modules.length).fill(false);
		this.toggles[this.moduleID-1] = true;

		console.log('before');
		this.vpScroller.scrollToAnchor('videoElem')
		console.log('after');

		// setTimeout(() => {
		// 	const dom: HTMLElement = this.elementRef.nativeElement;
		// 	dom.querySelector('.selected-element')?.scrollIntoView();
		// }, 200);
	}

	toggleModule(id: number):void {
		this.toggles[id-1] = !this.toggles[id-1];
	}

	goToVideo(newModuleID: number, newVideoID:number):void {
		this._router.navigate(['/watch/course', this.courseID, 'module', newModuleID, 'video', newVideoID])
			.then(() => {
				window.location.reload()
			});
	}
}

/*
[routerLink]="[
'/watch/course',
courseID,
'module',
module.id,
'video',
element.id
]"
*/
