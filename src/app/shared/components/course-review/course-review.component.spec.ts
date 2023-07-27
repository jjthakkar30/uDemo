import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReviewComponent } from './course-review.component';

describe('CourseReviewComponent', () => {
  let component: CourseReviewComponent;
  let fixture: ComponentFixture<CourseReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseReviewComponent]
    });
    fixture = TestBed.createComponent(CourseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
