import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.registerMode = false;
    this.values = this.getValues();
  }

  registerToggle() {
this.registerMode = !this.registerMode;
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean){
this.registerMode = registerMode;
  }

}
