import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum risus a velit commodo, eget maximus libero facilisis. In hac habitasse platea dictumst. Curabitur accumsan lacus quis libero dictum, eget convallis massa porttitor. Sed in malesuada libero, et vulputate odio. Phasellus posuere, sem sed ultricies elementum, sem felis finibus turpis, sed ornare sapien tellus nec ex. Nullam volutpat fermentum sapien, eget ornare libero porttitor id. Nulla vulputate velit vitae ullamcorper porttitor. Maecenas dolor risus, laoreet nec tristique quis, auctor id dolor. Aenean eleifend pharetra eros, at semper mauris blandit et. Maecenas quam risus, molestie scelerisque leo ac, ornare porta ex. Donec ornare dui ac tellus accumsan interdum. Nam dapibus vestibulum ante sit amet maximus. Morbi eu ipsum egestas, bibendum nunc in, auctor diam. Mauris porttitor odio id mauris aliquet auctor. Integer faucibus sagittis ex, et dignissim neque imperdiet vitae.";

let products: Product[] = [
  {
    name: "Collar Piedra Ammonite Petrificado Caracol",
    images: [
      "/assets/products/1_1.webp",
      "/assets/products/1_2.webp",
      "/assets/products/1_3.webp",
    ],
    price: 200
  },
  {
    name: "Arracadas De Oro 24k",
    images: [
      "/assets/products/2_1.webp",
      "/assets/products/2_2.webp",
    ],
    price: 400
  },
  {
    name: "Collar Corazón",
    images: [
      "/assets/products/3_1.webp",
      "/assets/products/3_2.webp",
    ],
    price: 250
  },
  {
    name: "Collar Puerquito",
    images: [
      "/assets/products/4_1.webp",
      "/assets/products/4_2.webp",
      "/assets/products/4_3.webp",
      "/assets/products/4_4.webp",
    ],
    price: 289
  },
  {
    name: "Bolsa Grande 2089 Yute",
    images: [
      "/assets/products/5_1.webp",
      "/assets/products/5_2.webp",
    ],
    price: 200
  },
  {
    name: "Bolsa Artesanal",
    images: [
      "/assets/products/6_1.webp",
      "/assets/products/6_2.webp",
    ],
    price: 399
  },
]
products.forEach((item, index) => products[index].id = `${index}`)
products.forEach((item, index) => products[index].description = lorem)

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(id: string): Observable<Product> {
    return of(products[parseInt(id)])
  }
  getHomeProducts(): Observable<Product[]> {
    return of(products)
  }
  getAll(): Observable<Product[]> {
    return of(products)
  }
  create(p: Product): Promise<boolean> {
    if(!p.images) p.images = []
    products.push({ ...p, id: products.length + "" })
    return Promise.resolve(true)
  }
  update(p: Product): Promise<boolean> {
    let oldP = products[parseInt(p.id)]
    products[parseInt(p.id)] = {...oldP, ...p}
    return Promise.resolve(true)
  }

}
