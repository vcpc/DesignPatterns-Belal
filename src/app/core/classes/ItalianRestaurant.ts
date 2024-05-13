import { Appetizer, MainCourse, Dessert } from '../interfaces/dishes';

/**
 * Class representing a italian appetizer.
 */
export class italianAppetizer implements Appetizer {
  name = 'italianAppetizer';
}

/**
 * Class representing a italian mainCourse.
 */
export class italianMainCourse implements MainCourse {
  name = 'italianMainCourse';
}

/**
 * Class representing a italian dessert.
 */
export class italianDessert implements Dessert {
  name = 'Dessert';
}
