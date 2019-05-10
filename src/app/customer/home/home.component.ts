import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  products: Product[] = [
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0 },
  ]

  ngOnInit() {
  }

  goToProduct(p: Product) {
    console.log(p)
  }

}
