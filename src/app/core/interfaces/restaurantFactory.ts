import { Appetizer } from './appetizer';
import { Dessert } from './dessert';
import { MainCourse } from './mainCourse';

/**
 * Interface representing a restaurant factory for creating different types of dishes.
 */
export interface RestaurantsFactory {
  /**
   * Creates a appetizer dish.
   */
  createAppetizer(): Appetizer;

  /**
   * Creates a mainCourse dish.
   */
  createMainCourse(): MainCourse;

  /**
   * Creates a dessert dish.
   */
  createDessert(): Dessert;
}
