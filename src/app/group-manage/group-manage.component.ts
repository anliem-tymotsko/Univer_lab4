import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../group.service';
import {Group} from '../model/group.model';
import {User} from '../model/user.model';

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.css']
})
export class GroupManageComponent implements OnInit {
  group: Group = new Group();
  subjectId: string;

  constructor(private router: ActivatedRoute, private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(({params}) => {
      this.getGroupById(params.id);
      this.subjectId = params.subjectId;
    });
  }

  getGroupById(id: string) {
    this.groupService.getGroupById(id).subscribe((data: any) => {
      this.group = data.group;
    });
  }

  onChange(mark: any, student: User) {
    if (confirm('Confirm mark ' + mark + ' for student: ' + student.firstname + ' ' + student.lastname)) {
      this.groupService.makeMark(mark, student._id, this.group._id, this.subjectId);
    }
  }
}
