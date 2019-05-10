import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  username: string = ""
  password: string = ""

  ngOnInit() {
  }

  submit(){
    if(this.password.length == 0 || this.username.length == 0) return true;
    this.authService.login(this.username, this.password).then(success=>{
      if(success){
        this.router.navigate([""])
      }
    })
    return true;
  }
}
