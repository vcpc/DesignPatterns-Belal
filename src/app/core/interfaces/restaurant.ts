import { Appetizer, MainCourse, Dessert } from '../interfaces/dishes';

/**
 * Interface representing a restaurant factory for creating different types of dishes.
 */
export interface Restaurants {
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
