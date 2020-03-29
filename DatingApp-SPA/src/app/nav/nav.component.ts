import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(public authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
      this.alertifyService.success('logged in successfully');
    }, error => {
      console.log(error);
      this.alertifyService.error(error);
    }
    );
  }

  loggedin() {
    return this.authService.loggedin();
    // const token = localStorage.getItem('token');
    // return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('just loggedout!');
    this.alertifyService.message('just loggedout!');
  }
}
