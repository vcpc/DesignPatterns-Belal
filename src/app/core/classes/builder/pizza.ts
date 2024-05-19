/**
 * Represents a pizza object with size, crust, sauce, cheese, and toppings.
 */
export class Pizza {
  /**
   * Creates an instance of Pizza.
   * @param size - The size of the pizza.
   * @param crust - The crust type of the pizza.
   * @param sauce - The sauce of the pizza.
   * @param cheese - The cheese type of the pizza.
   * @param toppings[] - An array of toppings for the pizza.
   */
  constructor(
    public size: string,
    public crust: string,
    public sauce: string,
    public cheese: string,
    public toppings: string[]
  ) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
  }
}
