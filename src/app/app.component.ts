import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = new User;

constructor(private service: LoginService) {}



  ngOnInit(): void {
   this.service.getLoginService().subscribe(data => {
     this.user.lastName = data.lastName;
     this.user.name = data.name;
   });
  }
}
