import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    login = new Login();

    users: Login[] = [];
    valid = true;
    isLoggedIn = 'false';
    @ViewChild('uname') usernameElement!: ElementRef;

    loginEl!: ElementRef;

    loginForm: UntypedFormGroup = new UntypedFormGroup({});

    constructor(private router: Router, private formBuilder: UntypedFormBuilder,
        private loginService: LoginService, private renderer: Renderer2) {
    }

    ngOnInit() {
        // Makes a service call to fetch users data from backend
        this.loginService.getUsers()
            .subscribe(users => this.users = users);
        this.loginForm = this.formBuilder.group({
            userName: [this.login.userName, Validators.required],
            password: [this.login.password, Validators.required]
        })
    }

    // Invoked when user clicks submit in login form
    // Validates the credentials with the fetched data from the database
    onSubmit() {
        this.valid = true;
        // const name = this.loginForm.get('userName')?.value;
        //fetches the form object with key as name of the control and value as the form control's value
        this.login = this.loginForm.getRawValue();
        const name = this.login.userName;
        this.loginService.username = this.login.userName;
        console.log("login service uname: ", this.loginService.username);
        // sessionStorage.setItem('username', this.login.userName);

        const password = this.login.password;
        const user = this.users.filter(currUser => currUser.userName === name && currUser.password === password)[0];
        if (user) {
            this.isLoggedIn = 'true';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);

            this.router.navigate(['/products']);
        } else {
            this.isLoggedIn = 'false';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.valid = false;
        }
    }
}
