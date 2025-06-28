import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppDirective } from './app.directive';

@NgModule({
    imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [AppComponent, WelcomeComponent, LoginComponent, AppDirective],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
