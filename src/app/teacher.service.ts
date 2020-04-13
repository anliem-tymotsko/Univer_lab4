import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {
  }

  getTeacherById() {
    const id = localStorage.getItem('user');
    return this.http.get('http://localhost:3000/teacher/' + id);
  }

  createTeacher(teacher: User) {
    const body = {
      firstname: teacher.firstname,
      lastname: teacher.lastname,
      email: teacher.email,
      subjects: teacher.subjects,
      role: 'teacher',
      access: true
    };
    return this.http.post('http://localhost:3000/admin/teacher/create', body).subscribe();
  }
}
