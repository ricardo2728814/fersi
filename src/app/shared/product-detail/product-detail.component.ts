import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  product: Product = null;
  private imageIndex: number = null
  imageToDisplay: string = null

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.productService.getProduct(paramMap.get("id")).subscribe(
        product => {
          this.product = product
          this.imageToDisplay = this.product.images[0];
          this.imageIndex = 0;
        }
      )

    })
  }
  changeImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.product.images.length) this.imageIndex = 0;
    this.imageToDisplay = this.product.images[this.imageIndex];
  }
}
