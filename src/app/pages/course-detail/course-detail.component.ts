import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse, courseService } from 'src/app/shared/api/services/course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { userService } from 'src/app/shared/api/services/user.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit{
	courseID: number = 0;
	course !: ICourse;
	ifEnrolled: boolean = false;

	constructor(private _route: ActivatedRoute, private _courseService: courseService, private _modalService: NgbModal, private _userService: userService) {}
	ngOnInit(): void {
		this.courseID = +this._route.snapshot.params['course_id'];
		this.course = this._courseService.getCourse(this.courseID);
		this.ifEnrolled = this._userService.getIfEnrolled(this.courseID);
	}

	open(previewModal: any) {
		this._modalService.open(previewModal, {size: 'xl', windowClass: 'modal'});
	}

}
