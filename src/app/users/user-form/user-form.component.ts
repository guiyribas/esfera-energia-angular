import { UsersService } from '../../services/users.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  preserveWhitespaces: true,
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;
  hide = true;
  user = this.route.snapshot.data.user;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {

    this.userForm = new FormGroup({
      name: new FormControl({ value: this.user.name, disabled: true }),
      userName: new FormControl({ value: this.user.username, disabled: true }),
      email: new FormControl({ value: this.user.email, disabled: true }),
      phone: new FormControl({ value: this.user.phone, disabled: true }),
      website: new FormControl({ value: this.user.website, disabled: true }),
    });
    console.log('userForm', this.userForm);
  }

  ngOnCancel() {
    this.submitted = false;
    this.router.navigate(['/']);
  }
}
