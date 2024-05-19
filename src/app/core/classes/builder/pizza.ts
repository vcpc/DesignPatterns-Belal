export class Pizza {
  /**
   * The size of the pizza ('small', 'medium', 'large').
   */
  size: string = '';
  /**
   * The type of crust for the pizza ('thin', 'thick', 'stuffed').
   */
  crust: string = '';
  /**
   * The sauce type used on the pizza ('tomato', 'pesto', 'white sauce').
   */
  sauce: string = '';
  /**
   * The cheese type used on the pizza ('mozzarella', 'cheddar', 'feta').
   */
  cheese: string = '';
  /**
   * An array of strings representing the toppings on the pizza (['pepperoni', 'mushrooms','onions','olives']).
   */
  toppings: string[] = [];
}
