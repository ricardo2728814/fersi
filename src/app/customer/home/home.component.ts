import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
    {image: "/assets/sample.jpg", name:"Collar", price: 50.0},
  ]

  ngOnInit() {
  }

}
