import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursePaymentComponent } from './pages/course-payment/course-payment.component';
import { WatchCourseComponent } from './pages/watch-course/watch-course.component';
import { authGuard } from './shared/api/services/auth.guard';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { InstructorDetailComponent } from './pages/instructor-detail/instructor-detail.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		pathMatch: 'full'
	},
	{
		path: 'user-login',
		component: LoginPageComponent
	},
	{
		path: 'user-registration',
		component: SignupPageComponent
	},
	{
		path: 'course/:course_id',
		component: CourseDetailComponent,
	},
	{
		path: 'course/:course_id/payment',
		component: CoursePaymentComponent,
		canActivate: [authGuard]
	},
	{
		path: 'watch/course/:course_id/module/:module_id/video/:video_id',
		component: WatchCourseComponent,
	},
	{
		path: 'user/:id:',
		component: UserProfileComponent,
		// canActivate: [authGuard]
	},
	{
		path: 'user/:user_id/dashboard',
		component: UserDashboardComponent,
		// canActivate: [authGuard]
	},
	{
		path: 'instructor/:id',
		component: InstructorDetailComponent
	},
	{
		path: 'course',
		redirectTo: ''
	},
	{
		path: 'courses',
		redirectTo: ''
	},
	{
		path: '**',
		component: ErrorPageComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled'
	})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
