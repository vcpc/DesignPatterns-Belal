import { Appetizer } from '../interfaces/appetizer';
import { Dessert } from '../interfaces/dessert';
import { MainCourse } from '../interfaces/mainCourse';
import { RestaurantsFactory } from '../interfaces/restaurantFactory';
import { ItalianAppetizer } from './ItalianAppetizer';
import { ItalianDessert } from './ItalianDessert';
import { ItalianMainCourse } from './ItalianMainCourse';

export class ItalianRestaurantFactory implements RestaurantsFactory {
  createAppetizer(): Appetizer {
    return ItalianAppetizer;
  }
  createDessert(): Dessert {
    return ItalianMainCourse;
  }
  createMainCourse(): MainCourse {
    return ItalianDessert;
  }
}
