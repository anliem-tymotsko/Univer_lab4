import {Injectable} from '@angular/core';
import {User} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from './model/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Subject[]>('http://localhost:3000/admin/subject/all');
  }

  getSubjectById(id: string) {
    return this.http.get('http://localhost:3000/admin/subject/' + id);
  }
}
