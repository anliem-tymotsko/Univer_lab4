import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../model/user.model';
import {Group} from '../model/group.model';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  subjects = [];
  teachers = [];
  students = [];
  studentsInGroup = [];
  group: Group = new Group();
  addedSubjects: object[] = [];

  constructor(private adminService: AdminService, private  formBuilder: FormBuilder, private subjectService: SubjectService) {
    this.createGroupForm = this.formBuilder.group({
      numGroup: '',
      nameGroup: '',
      curator: User
    });
  }

  createGroupForm: FormGroup;

  ngOnInit(): void {
    this.getAllTeachers();
    this.getAllStudents();
    this.getAllSubjects();
  }

  getAllTeachers() {
    this.adminService.getAllTeachers().subscribe((data: any) => {
        this.teachers = data.users;
      }
    );
  }

  getAllStudents() {
    this.adminService.getSudents().subscribe((data: any) => {
        this.students = data.users;
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

  onChange(event: any) {
    this.adminService.getSudentById(event).subscribe(
      (data: any) => {
        this.studentsInGroup.push(data.users);
      }
    );
  }

  remove(student: any) {
    console.log(student);
    this.studentsInGroup.indexOf(student);
    this.studentsInGroup.splice(this.studentsInGroup.length - 1, 1);
    this.getAllStudents();
  }

  createGroup(groupData: any) {

    this.group.number = groupData.numGroup;
    this.group.name = groupData.nameGroup;
    this.group.curator = groupData.curator;
    this.group.students = this.studentsInGroup;
    this.group.subjects = this.addedSubjects;

    this.adminService.createGroup(this.group);
    alert('group - ' + this.group.name + ', ' + this.group.number + ' was added');
  }

  onChangeSub(value: any) {
    this.addedSubjects.push(value);
  }
}
