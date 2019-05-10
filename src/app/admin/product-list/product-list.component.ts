import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  products: Product[] = []

  ngOnInit() {
    this.productService.getAll().subscribe(products=>{
      this.products = products
    })
  }
  navProduct(p: Product){
    this.router.navigate(["admin","product",p.id])
  }
  createProduct(){
    this.router.navigate(["admin","product"])
  }
}
