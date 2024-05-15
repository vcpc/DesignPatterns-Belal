import { Appetizer } from '../interfaces/appetizer';
import { Dessert } from '../interfaces/dessert';
import { MainCourse } from '../interfaces/mainCourse';
import { Restaurants } from '../interfaces/restaurant';
import { ItalianAppetizer } from './ItalianAppetizer';
import { ItalianDessert } from './ItalianDessert';
import { ItalianMainCourse } from './ItalianMainCourse';

export class ItalianRestaurantFactory implements Restaurants {
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
