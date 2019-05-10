import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  isUserLoggedIn = false
  userName = ""

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      if (user == null) this.isUserLoggedIn = false
      else {
        this.isUserLoggedIn = true
        this.userName = user.username
      }
    })
  }

  login() {
    this.router.navigate(["admin", "login"])
  }
  logout() {
    this.authService.logout().then(() => this.homeAction())
  }
  homeAction() {
    this.router.navigate([""])
  }
  navProductos() {
    this.router.navigate(["admin", "products"])
  }
}
