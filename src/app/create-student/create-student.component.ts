import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../model/user.model';
import {GroupService} from '../group.service';
import {Group} from '../model/group.model';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  groups = [];
  student: User = new User;
  groupId: string;


  constructor(private  formBuilder: FormBuilder, private groupService: GroupService, private  adminService: AdminService) {
    this.createStudentForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: ''
    });
  }

  createStudentForm: FormGroup;

  ngOnInit(): void {
    this.getAllGroups();
  }

  createStudent(student: any) {

    this.student.firstname = student.firstname;
    this.student.lastname = student.lastname;
    this.student.email = student.email;
    this.adminService.createStudent(this.student, this.groupId);
  }

  getAllGroups() {
    this.groupService.getAllGroups().subscribe((data: any) => {
        this.groups = data.groups;
      }
    );
  }

  GroupId(value: any) {
    this.groupId = value;
  }
}
