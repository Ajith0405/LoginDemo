import { Component } from '@angular/core';
import { User } from '../user';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User = new User();
  constructor(private s1:DemoService){}
  

  logindata()
  {
    this.s1.logindata1(this.user).subscribe( data=>{
      alert("Login Sucessful")},
      error=>alert("Invalid Id/Pswd")
    );
  }

}
