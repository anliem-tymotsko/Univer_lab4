import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from '../model/subject.model';
import {SubjectService} from '../subject.service';
import {User} from '../model/user.model';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  subjects: [];
  addedSubjects: object[] = [];
  teacher: User = new User;

  constructor(private  formBuilder: FormBuilder, private subjectService: SubjectService, private teacherService: TeacherService) {
    this.createTeacherForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      subjects: []
    });
  }

  createTeacherForm: FormGroup;

  ngOnInit(): void {
    this.getAllSubjects();
  }

  onChange(event: any) {
    this.subjectService.getSubjectById(event).subscribe((data: any) => {
        this.addedSubjects.push(data.subjects);
      }
    );
  }

  getAllSubjects() {
    this.subjectService.getAll().subscribe((data: any) => {
        this.subjects = data.subjects;
        console.log(data.subjects);
      }
    );
  }

  createTeacher(dataTeacher: any) {
    this.teacher.firstname = dataTeacher.firstname;
    this.teacher.lastname = dataTeacher.lastname;
    this.teacher.email = dataTeacher.email;
    this.teacher.subjects = this.addedSubjects;

    this.teacherService.createTeacher(this.teacher);
    console.log('teacher - ' + this.teacher.firstname + ', ' + this.teacher.lastname + ' was added');
  }

  remove(sub: object) {
    this.addedSubjects.indexOf(sub);
    this.addedSubjects.splice(this.addedSubjects.length - 1, 1);
    this.getAllSubjects();
  }
}
