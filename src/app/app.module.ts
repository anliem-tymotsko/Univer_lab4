import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminAprovementComponent} from './admin-aprovement/admin-aprovement.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { ModalGroupComponent } from './modal-group/modal-group.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GroupManageComponent } from './group-manage/group-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminAprovementComponent,
    CreateGroupComponent,
    CreateTeacherComponent,
    CreateStudentComponent,
    TeacherPageComponent,
    ModalGroupComponent,
    GroupManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalGroupComponent]
})
export class AppModule {
}
