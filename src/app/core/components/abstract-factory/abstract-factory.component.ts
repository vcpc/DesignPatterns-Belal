import { RestaurantFactory } from './../../interfaces/restaurantFactory';
import { Component } from '@angular/core';
import { ItalianRestaurantFactory } from '../../classes/italian-restaurant-factory';
import { MexicanRestaurantFactory } from '../../classes/mexican-restaurant-factory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abstract-factory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './abstract-factory.component.html',
  styleUrl: './abstract-factory.component.css',
})
export class AbstractFactoryComponent {
  /**
   * @property {string} clientCuisine to detect the clint choosen restaurant
   */
  clientCuisine: string = '';
  /**
   * @property {Restaurants} cuisines to choose class to choose cusines
   */
  cuisines!: RestaurantFactory;
  /**
   * @property {string} Appetizer one of the cuisines dishes value set depend on choosen cuisine
   */
  Appetizer!: string;
  /**
   * @property {string} MainCourse  one of the cuisines dishes value set depend on choosen cuisine
   */
  MainCourse!: string;
  /**
   * @property {string} Dessert one of the cuisines dishes value set depend on choosen cuisine
   */
  Dessert!: string;

  /**
   * Handle Choosen Cuisines from select element
   * the cusines build the menu depend on use choosen from Italian and Mexican
   * making the making the choices between only two options making the possibility for the client to choose any unknown restaurants zero
   */
  onCuisinesChange(): void {
    if (this.clientCuisine === 'Italian') {
      this.cuisines = new ItalianRestaurantFactory();
    } else if (this.clientCuisine === 'Mexican') {
      this.cuisines = new MexicanRestaurantFactory();
    } else {
      alert(
        'Not Valid Cuisines Name Please Select From The DropDown Options Only'
      );
      location.reload();
    }
    this.Appetizer = this.cuisines.createAppetizer().name;
    this.Dessert = this.cuisines.createDessert().name;
    this.MainCourse = this.cuisines.createMainCourse().name;
  }
}
