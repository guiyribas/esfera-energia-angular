import { UsersService } from '../../services/users.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  preserveWhitespaces: true,
})
export class UsersListComponent implements OnInit {
  allUsers: User[];

  constructor(
    private usersService: UsersService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.usersService.list().subscribe((res) => {
      this.allUsers = res;
      this.changeDetectorRefs.detectChanges();
    });
  }

  onEdit(user) {
    this.router.navigate([user], { relativeTo: this.route });
  }
}
