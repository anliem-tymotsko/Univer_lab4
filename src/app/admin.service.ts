import {Injectable} from '@angular/core';
import {User} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {Group} from './model/group.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getUnapproved() {
    return this.http.get<User[]>('http://localhost:3000/admin/users/unacceppted');
  }

  getAllTeachers() {
    return this.http.get<User[]>('http://localhost:3000/admin/users/teachers');
  }

  changeAccess(status: any, id: string) {
    return this.http.get('http://localhost:3000/admin/users/changeAccess/' + id + '/' + status, {responseType: 'text'}).subscribe();
  }

  getSudents() {
    return this.http.get<User[]>('http://localhost:3000/admin/users/students');
  }


  getSudentById(id: string) {
    return this.http.get('http://localhost:3000/admin/users/student/' + id);
  }

  createGroup(group: Group) {
    console.log('[create group]');
    const body = {
      numder: group.number,
      name: group.name,
      curator: group.curator,
      students: group.students,
      subjects: group.subjects
    };
    return this.http.post('http://localhost:3000/admin/group/create', body).subscribe();
  }

  createStudent(student: User, group: string) {
    const body = {
      firstname: student.firstname,
      lastname: student.lastname,
      email: student.email,
      group_: group
  };
    return this.http.post('http://localhost:3000/admin/student/create', body).subscribe();
  }
}
