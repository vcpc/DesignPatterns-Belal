import { Appetizer, Dessert, MainCourse } from '../interfaces/dishes';
import { Restaurants } from '../interfaces/restaurant';
import {
  italianAppetizer,
  italianDessert,
  italianMainCourse,
} from './ItalianRestaurant';

export class ItalianRestaurantFactory implements Restaurants {
  createAppetizer(): Appetizer {
    return italianAppetizer;
  }
  createDessert(): Dessert {
    return italianMainCourse;
  }
  createMainCourse(): MainCourse {
    return italianDessert;
  }
}
