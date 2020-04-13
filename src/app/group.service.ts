import {Injectable} from '@angular/core';
import {Subject} from './model/subject.model';
import {Group} from './model/group.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  getAllGroups() {
    return this.http.get<Group[]>('http://localhost:3000/admin/group/all');
  }

  getGroupById(id: string) {
    return this.http.get('http://localhost:3000/group/' + id,);
  }

  makeMark(mark: number, idStudent: string, idGroup: string, idSubject) {

    const body = {
      mark, idStudent, idGroup, idSubject
    };
    console.log(body);
    return this.http.post('http://localhost:3000/make-mark', body).subscribe();
  }
}
