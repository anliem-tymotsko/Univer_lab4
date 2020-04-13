import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminAprovementComponent} from './admin-aprovement/admin-aprovement.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {CreateTeacherComponent} from './create-teacher/create-teacher.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {TeacherPageComponent} from './teacher-page/teacher-page.component';
import {GroupManageComponent} from './group-manage/group-manage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/approve',
    component: AdminAprovementComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/group/create',
    component: CreateGroupComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/teacher/create',
    component: CreateTeacherComponent,
    pathMatch: 'full'
  }, {
    path: 'teacher-page',
    component: TeacherPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/student/create',
    component: CreateStudentComponent,
    pathMatch: 'full'
  }, {
    path: 'group-manage/:id/:subjectId',
    component: GroupManageComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
