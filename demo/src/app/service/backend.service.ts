import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  createUser(user) {
    return this.http.post('http://localhost:8000/createUser', user);
  }

  getUsers() {
    return this.http.get('http://localhost:8000/getUsers');
  }

  editUser(data, id) {
    console.log('id in http', id);
    return this.http.put('http://localhost:8000/editUser', data, {
      params: id,
    });
  }

  deleteUser(id) {
    console.log('id in http', id);
    return this.http.delete('http://localhost:8000/deleteUser', {
      params: id,
    });
  }
}
