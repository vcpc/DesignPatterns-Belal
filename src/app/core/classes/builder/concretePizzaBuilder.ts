import { PizzaBuilder } from '../../interfaces/builder/PizzaBuilder';
import { Pizza } from './pizza';
/**
 * This class implements the PizzaBuilder interface, providing a concrete way to construct Pizza objects step-by-step.
 * @implements {PizzaBuilder}
 */
export class ConcretePizzaBuilder implements PizzaBuilder {
  /**
   * The Pizza object being built.
   */
  Pizza: Pizza = new Pizza();
  /**
   * Sets the size of the pizza being built.
   * @param size The desired size of the pizza ('small', 'medium', 'large').
   */
  setSize(size: string): void {
    this.Pizza.size = size;
  }
  /**
   * Sets the crust type of the pizza being built.
   * @param crust The desired crust type ('thin', 'thick', 'stuffed').
   */
  setCrust(crust: string): void {
    this.Pizza.crust = crust;
  }
  /**
   * Sets the sauce type of the pizza being built.
   * @param sauce The desired sauce type ('tomato', 'pesto', 'white sauce').
   */
  setSauce(sauce: string): void {
    this.Pizza.sauce = sauce;
  }
  /**
   * Sets the cheese type of the pizza being built.
   * @param cheese The desired cheese type ('mozzarella', 'cheddar', 'feta').
   */
  setCheese(cheese: string): void {
    this.Pizza.cheese = cheese;
  }
  /**
   * Sets the toppings for the pizza being built.
   * @param toppings An array of strings representing the desired toppings (['pepperoni', 'mushrooms']).
   */
  setToppings(toppings: string[]): void {
    this.Pizza.toppings = toppings;
  }
  /**
   * Returns the complete Pizza object that has been built step-by-step.
   * @returns A new Pizza object with the configured size, crust, sauce, cheese, and toppings.
   */
  build(): Pizza {
    return this.Pizza;
  }
}
