import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-admin-aprovement',
  templateUrl: './admin-aprovement.component.html',
  styleUrls: ['./admin-aprovement.component.css']
})
export class AdminAprovementComponent implements OnInit {
  unApprovedUsers = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.allUnapproved();
  }

  allUnapproved() {
    this.adminService.getUnapproved().subscribe((data: any) => {
        this.unApprovedUsers = data.users;
      }
    );
  }

  confirmUser(userId) {
    this.adminService.changeAccess(true, userId);
    this.ngOnInit();
  }

  rejectUser(userId) {
    this.adminService.changeAccess(null, userId);
    this.ngOnInit();
  }

}
