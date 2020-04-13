import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../teacher.service';
import {User} from '../model/user.model';
import {ModalGroupComponent} from '../modal-group/modal-group.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  user: User;
  teachersSubjects: object = [];

  constructor(private teacherService: TeacherService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }


  getCurrentUser() {
    this.teacherService.getTeacherById().subscribe((data: any) => {
      this.user = data.user;
      this.teachersSubjects = this.user.subjects;
    });
  }

  showGroups(idSubject: any) {
    this.dialog.open(ModalGroupComponent, {
      data: {
        id: idSubject
      }
    });
  }
}

