import { Appetizer } from '../interfaces/appetizer';
import { Dessert } from '../interfaces/dessert';
import { MainCourse } from '../interfaces/mainCourse';
import { RestaurantsFactory } from '../interfaces/restaurantFactory';
import { MexicanAppetizer } from './MexicanAppetizer';
import { MexicanDessert } from './MexicanDessert';
import { MexicanMainCourse } from './MexicanMainCourse';
/**
 * Concrete Factory Class  responsible for creating Mexican dishes
 */
export class MexicanRestaurantFactory implements RestaurantsFactory {
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
