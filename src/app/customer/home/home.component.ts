import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';


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
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
    { image: "/assets/sample.jpg", name: "Collar", price: 50.0, id: "mLDMT16"},
  ]

  ngOnInit() {
  }

  goToProduct(p: Product) {
    this.router.navigate(["product", p.id])
  }

}
