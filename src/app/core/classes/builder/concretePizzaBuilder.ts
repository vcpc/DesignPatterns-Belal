import { PizzaBuilder } from '../../interfaces/builder/PizzaBuilder';
import { Pizza } from './pizza';

/**
 * Concrete implementation of PizzaBuilder interface.
 * Constructs a Pizza object step by step.
 */
export class ConcretePizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  /**
   * Constructs a new ConcretePizzaBuilder instance.
   * Initializes the pizza with default values.
   */
  constructor() {
    this.pizza = new Pizza('', '', '', '', []);
  }

  /**
   * Sets the size of the pizza.
   * @param size - The size of the pizza.
   */
  setSize(size: string): void {
    this.pizza.size = size;
  }

  /**
   * Sets the crust type of the pizza.
   * @param crust - The crust type of the pizza.
   */
  setCrust(crust: string): void {
    this.pizza.crust = crust;
  }

  /**
   * Sets the sauce of the pizza.
   * @param sauce - The sauce of the pizza.
   */
  setSauce(sauce: string): void {
    this.pizza.sauce = sauce;
  }

  /**
   * Sets the cheese type of the pizza.
   * @param cheese - The cheese type of the pizza.
   */
  setCheese(cheese: string): void {
    this.pizza.cheese = cheese;
  }

  /**
   * Sets the toppings of the pizza.
   * @param toppings - An array of toppings for the pizza.
   */
  setToppings(toppings: string[]): void {
    this.pizza.toppings = toppings;
  }

  /**
   * Constructs and returns the Pizza object configured by this builder.
   * @returns A Pizza object representing the configured pizza.
   */
  build(): Pizza {
    return this.pizza;
  }
}
