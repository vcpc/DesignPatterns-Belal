import { Appetizer } from '../interfaces/appetizer';
import { Dessert } from '../interfaces/dessert';
import { MainCourse } from '../interfaces/mainCourse';
import { Restaurants } from '../interfaces/restaurant';
import { MexicanAppetizer } from './MexicanAppetizer';
import { MexicanDessert } from './MexicanDessert';
import { MexicanMainCourse } from './MexicanMainCourse';

export class MexicanRestaurantFactory implements Restaurants {
  createAppetizer(): Appetizer {
    return MexicanAppetizer;
  }
  createDessert(): Dessert {
    return MexicanMainCourse;
  }
  createMainCourse(): MainCourse {
    return MexicanDessert;
  }
}
