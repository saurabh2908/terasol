import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private service: BackendService, private route: Router) {}
  fullName: any = '';
  data: any;
  editId: any;
  editData: any;
  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      if (res) {
        console.log(res.firstname);
        // this.data.push(res);
        this.data = res;
        console.log(res);
      } else {
        console.log('no data');
      }
    });
  }

  editUser(index, id) {
    this.editId = id;
    this.editData = this.data[index];
    this.profileForm.get('firstname').setValue(`${this.editData.firstname}`);
    this.profileForm.get('lastname').setValue(`${this.editData.lastname}`);
    this.profileForm.get('city').setValue(`${this.editData.city}`);
    this.profileForm.get('email').setValue(`${this.editData.email}`);
    // this.profileForm.firstname.setValue(this.editData);
  }
  create() {
    this.route.navigate(['/createUser']);
  }
  deleteUser(index, id) {
    this.data.splice(index, 1);
    console.log(id);
    this.service.deleteUser({ _id: id }).subscribe((res: any) => {
      console.log('remove succefully');
    });
  }
  profileForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    email: new FormControl(),
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
      this.service
        .editUser(this.profileForm.value, { _id: this.editId })
        .subscribe((res: any) => {
          location.reload();
        });
    }
  }
}
