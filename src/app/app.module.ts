import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { courseService } from './shared/api/services/course.service';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseContentComponent } from './shared/components/course-content/course-content.component';
import { CourseShowcaseComponent } from './shared/components/course-showcase/course-showcase.component';
import { CoursePaymentComponent } from './pages/course-payment/course-payment.component';
import { userService } from './shared/api/services/user.service';
import { loginService } from './shared/api/services/login.service';
import { WatchCourseComponent } from './pages/watch-course/watch-course.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { CourseReviewComponent } from './shared/components/course-review/course-review.component';
import { InstructorDetailComponent } from './pages/instructor-detail/instructor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ErrorPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CourseCardComponent,
    CourseDetailComponent,
    CourseContentComponent,
    CourseShowcaseComponent,
    CoursePaymentComponent,
    WatchCourseComponent,
    UserDashboardComponent,
    UserProfileComponent,
    CourseReviewComponent,
    InstructorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
		BrowserAnimationsModule
  ],
  providers: [
		courseService,
		userService,
		loginService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
