import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage = '';

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (username !== 'admin' || password !== 'admin') {
      this.errorMessage = 'Invalid credentials';
    } else {
      this.errorMessage = '';
      alert('Login successful!');
    }
  }
}

