export interface PizzaBuilder {
  /**
   * Sets the size of the pizza being built.
   * @param size The desired size of the pizza ('small', 'medium', 'large').
   */
  setSize(size: string): void;
  /**
   * Sets the crust type of the pizza being built.
   * @param crust The desired crust type ('thin', 'thick', 'stuffed').
   */
  setCrust(crust: string): void;
  /**
   * Sets the sauce type of the pizza being built.
   * @param sauce The desired sauce type ('tomato', 'pesto', 'white sauce').
   */
  setSauce(sauce: string): void;
  /**
   * Sets the cheese type of the pizza being built.
   * @param cheese The desired cheese type ('mozzarella', 'cheddar', 'feta').
   */
  setCheese(cheese: string): void;
  /**
   * Sets the toppings for the pizza being built.
   * @param toppings An array of strings representing the desired toppings (['pepperoni', 'mushrooms','onions','olives']).
   */
  setToppings(toppings: string[]): void;
}
