import { Appetizer, MainCourse, Dessert } from '../interfaces/dishes';

/**
 * Class representing a mexican appetizer.
 */

export class mexicanAppetizer implements Appetizer {
  name = 'mexicanAppetizer';
}

/**
 * Class representing a mexican main course.
 */
export class MexicanMainCourse implements MainCourse {
  name = 'mexicanMainCourse';
}

/**
 * Class representing a mexican dessert.
 */
export class MexicanDessert implements Dessert {
  name = 'mexicanDessert';
}
