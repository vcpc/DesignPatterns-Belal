import { Appetizer } from '../interfaces/appetizer';
import { Dessert } from '../interfaces/dessert';
import { MainCourse } from '../interfaces/mainCourse';
import { RestaurantFactory } from '../interfaces/restaurantFactory';
import { MexicanAppetizer } from './MexicanAppetizer';
import { MexicanDessert } from './MexicanDessert';
import { MexicanMainCourse } from './MexicanMainCourse';
/**
 * Concrete Factory Class responsible for creating Mexican dishes.
 * @implements {RestaurantFactory}
 */
export class MexicanRestaurantFactory implements RestaurantFactory {
  createAppetizer(): Appetizer {
    /**
     * Creates an Mexican appetizer.
     * @returns {Appetizer} An instance of MexicanAppetizer.
     */
    return MexicanAppetizer;
  }
  /**
   * Creates an Mexican appetizer.
   * @returns {Dessert} An instance of MexicanMainCourse.
   */
  createDessert(): Dessert {
    return MexicanMainCourse;
  }
  /**
   * Creates an Mexican appetizer.
   * @returns {MainCourse} An instance of MexicanDessert.
   */
  createMainCourse(): MainCourse {
    return MexicanDessert;
  }
}
