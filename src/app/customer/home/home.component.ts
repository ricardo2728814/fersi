import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  products: Product[] = []

  ngOnInit() {
    this.productService.getHomeProducts().pipe(
      map(products=>products.map(p=>({...p, image: p.images[0]})))
    ).subscribe(
      products=>this.products = products
    )
  }

  goToProduct(p: Product) {
    this.router.navigate(["product", p.id])
  }

}
