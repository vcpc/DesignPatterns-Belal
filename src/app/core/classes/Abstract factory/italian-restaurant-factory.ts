import { Appetizer } from '../../interfaces/Abstract factory/appetizer';
import { Dessert } from '../../interfaces/Abstract factory/dessert';
import { MainCourse } from '../../interfaces/Abstract factory/mainCourse';
import { RestaurantFactory } from '../../interfaces/Abstract factory/restaurantFactory';
import { ItalianAppetizer } from './ItalianAppetizer';
import { ItalianDessert } from './ItalianDessert';
import { ItalianMainCourse } from './ItalianMainCourse';

/**
 * Concrete Factory Class responsible for creating Italian dishes.
 * @implements {RestaurantFactory}
 */

export class ItalianRestaurantFactory implements RestaurantFactory {
  /**
   * Creates an Italian appetizer.
   * @returns {Appetizer} An instance of ItalianAppetizer.
   */
  createAppetizer(): Appetizer {
    return ItalianAppetizer;
  }
  /**
   * Creates an Italian main course.
   * @returns {MainCourse} An instance of ItalianMainCourse.
   */
  createDessert(): Dessert {
    return ItalianMainCourse;
  }
  /**
   * Creates an Italian dessert.
   * @returns {Dessert} An instance of ItalianDessert.
   */
  createMainCourse(): MainCourse {
    return ItalianDessert;
  }
}
