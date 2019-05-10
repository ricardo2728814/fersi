import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus a velit commodo, eget maximus libero facilisis. In hac habitasse platea dictumst. Curabitur accumsan lacus quis libero dictum, eget convallis massa porttitor. Sed in malesuada libero, et vulputate odio. Phasellus posuere, sem sed ultricies elementum, sem felis finibus turpis, sed ornare sapien tellus nec ex. Nullam volutpat fermentum sapien, eget ornare libero porttitor id. Nulla vulputate velit vitae ullamcorper porttitor. Maecenas dolor risus, laoreet nec tristique quis, auctor id dolor. Aenean eleifend pharetra eros, at semper mauris blandit et. Maecenas quam risus, molestie scelerisque leo ac, ornare porta ex. Donec ornare dui ac tellus accumsan interdum. Nam dapibus vestibulum ante sit amet maximus. Morbi eu ipsum egestas, bibendum nunc in, auctor diam. Mauris porttitor odio id mauris aliquet auctor. Integer faucibus sagittis ex, et dignissim neque imperdiet vitae.";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  product: Product = null;
  private imageIndex: number = null
  imageToDisplay: string = null

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap.get("id"))
      this.product = {
        description: lorem, name: "Collar", price: 50.0, images: [
          "/assets/sample.jpg",
          "/assets/sample.jpg",
        ]
      }
      this.imageToDisplay = this.product.images[0];
      this.imageIndex = 0;
    })
  }
  changeImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.product.images.length) this.imageIndex = 0;
    this.imageToDisplay = this.product.images[this.imageIndex];
  }
}
