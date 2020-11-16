
import { Component, OnInit} from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  imageURL: string = 'https://image.freepik.com/free-vector/minimalist-book-template_23-2147504381.jpg?1';

  booknames = [];
  calculatedPrice: number;
  sum: number = 0;
  addValue(value) {
    this.sum += value;

    this.calculatedPrice = this.sum;
  }

  addName(name , uprice){
    this.booknames.push({fname : name, Unitprice: uprice});
  }



}
