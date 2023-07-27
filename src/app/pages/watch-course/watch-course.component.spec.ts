import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCourseComponent } from './watch-course.component';

describe('WatchCourseComponent', () => {
  let component: WatchCourseComponent;
  let fixture: ComponentFixture<WatchCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchCourseComponent]
    });
    fixture = TestBed.createComponent(WatchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
