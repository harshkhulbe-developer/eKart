import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name="John Doe"
  addToCart:number = 5;
  product = {
    name:"iPhone",
    price: 789,
    color:"Red",
    discount:8.5,
    inStock:10,
    pImage:"../../assets/images/iphone.png",
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price*this.product.discount/100);
  }

  deleteProduct() {
    if(this.addToCart > 0) {
      this.addToCart = this.addToCart - 1; 
      this.product.inStock = this.product.inStock + 1;
    }
  }

  addProduct() {
    if(this.product.inStock > 0){
      this.addToCart = this.addToCart + 1;
    }
    this.product.inStock = this.product.inStock - 1;
  }
}
