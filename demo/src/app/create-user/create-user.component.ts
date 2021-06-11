import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(private service: BackendService, private route: Router) {}

  ngOnInit(): void {}
  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit() {
    if (
      this.profileForm.value.firstname == '' ||
      this.profileForm.value.lastname == '' ||
      this.profileForm.value.city == '' ||
      this.profileForm.value.email == ''
    ) {
      alert('Field must be filled');
    } else {
      this.service.createUser(this.profileForm.value).subscribe((res) => {
        console.log(res);
        this.route.navigate(['/users']);
      });
    }
  }
}
