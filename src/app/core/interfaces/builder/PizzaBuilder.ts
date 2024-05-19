import { Pizza } from '../../classes/builder/pizza';

/**
 * Interface for defining a pizza builder.
 */
export interface PizzaBuilder {
  /**
   * Sets the size of the pizza.
   * @param size - The `size` of the pizza.
   */
  setSize(size: string): void;

  /**
   * Sets the crust type of the pizza.
   * @param crust - The `crust` type of the pizza.
   */
  setCrust(crust: string): void;

  /**
   * Sets the sauce of the pizza.
   * @param sauce - The `sauce` of the pizza.
   */
  setSauce(sauce: string): void;

  /**
   * Sets the cheese type of the pizza.
   * @param cheese - The `cheese` type of the pizza.
   */
  setCheese(cheese: string): void;

  /**
   * Sets the toppings of the pizza.
   * @param toppings - An array of `toppings` for the pizza.
   */
  setToppings(toppings: string[]): void;

  /**
   * Constructs and returns a `Pizza` object based on the builder's configuration.
   * @returns A Pizza object representing the configured pizza.
   */
  build(): Pizza;
}
