import { Appetizer, Dessert, MainCourse } from '../interfaces/dishes';
import { Restaurants } from '../interfaces/restaurant';
import {
  MexicanDessert,
  MexicanMainCourse,
  mexicanAppetizer,
} from './mexicanRestaurant';

export class MexicanRestaurantFactory implements Restaurants {
  createAppetizer(): Appetizer {
    return mexicanAppetizer;
  }
  createDessert(): Dessert {
    return MexicanMainCourse;
  }
  createMainCourse(): MainCourse {
    return MexicanDessert;
  }
}
