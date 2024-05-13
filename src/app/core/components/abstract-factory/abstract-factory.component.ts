import { Component } from '@angular/core';
import { Restaurants } from '../../interfaces/restaurant';
import { ItalianRestaurantFactory } from '../../classes/italian-restaurant-factory';
import { MexicanRestaurantFactory } from '../../classes/mexican-restaurant-factory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abstract-factory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abstract-factory.component.html',
  styleUrl: './abstract-factory.component.css',
})
export class AbstractFactoryComponent {
  cuisines!: Restaurants;
  Appetizer!: string;
  MainCourse!: string;
  Dessert!: string;

  onCuisinesChange(e: any): void {
    let cuisines = e.target.value;
    if (cuisines === 'Italian') {
      this.cuisines = new ItalianRestaurantFactory();
    } else if (cuisines === 'Mexican') {
      this.cuisines = new MexicanRestaurantFactory();
    }
    this.Appetizer = this.cuisines.createAppetizer().name;
    this.Dessert = this.cuisines.createDessert().name;
    this.MainCourse = this.cuisines.createMainCourse().name;
  }
}
