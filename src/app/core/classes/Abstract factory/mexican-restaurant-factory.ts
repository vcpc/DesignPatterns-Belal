import { Appetizer } from '../../interfaces/Abstract factory/appetizer';
import { Dessert } from '../../interfaces/Abstract factory/dessert';
import { MainCourse } from '../../interfaces/Abstract factory/mainCourse';
import { RestaurantFactory } from '../../interfaces/Abstract factory/restaurantFactory';
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
