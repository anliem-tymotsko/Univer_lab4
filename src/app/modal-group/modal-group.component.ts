import {Component, Inject, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {element} from 'protractor';
import {Group} from '../model/group.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-group',
  templateUrl: './modal-group.component.html',
  styleUrls: ['./modal-group.component.css']
})
export class ModalGroupComponent implements OnInit {
  allGroups = [];
  subGroups: object[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private shareWindow: MatDialog, private groupService: GroupService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllGroups();

  }

  getAllGroups() {
    this.groupService.getAllGroups().subscribe((data: any) => {
      this.allGroups = data.groups;
      console.log(this.allGroups);
      this.checkGroups();
    });
  }

  checkGroups() {
    for (let i = 0; i < this.allGroups.length; i++) {
      if (this.allGroups[i].subjects.includes(this.data.id)) {
        this.subGroups.push(this.allGroups[i]);
      }
    }
  }

  close() {
    this.shareWindow.closeAll();
  }

  navigate(id: string) {
    this.close();
    this.router.navigate(['group-manage/' , id, this.data.id]);
  }
}
