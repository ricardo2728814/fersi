import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private _location: Location
  ) { }

  isUpdate = false
  id: string = null

  name: string = ""
  description: string = ""
  price: string = ""

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get("id")
      if (id) {
        this.id = id
        this.isUpdate = true
        this.productService.getProduct(id).toPromise().then(p=>{
          this.name = p.name
          this.price = p.price+""
          this.description = p.description;
        })
      }
    })
  }

  submit() {
    let price: number = 0
    try {
      price = parseFloat(this.price)
    } catch (error) {
      return true;
    }
    let p: Product = {
      name: this.name,
      description: this.description,
      price
    }
    if (p.name.length == 0 || p.description.length == 0) return true;

    let promise = null
    if (this.isUpdate) {
      p.id = this.id
      promise = this.productService.update(p)
    } else {
      promise = this.productService.create(p)
    }

    if(promise) promise.then(success=>{
      if(success) this._location.back()
    })

    return true;
  }

}
