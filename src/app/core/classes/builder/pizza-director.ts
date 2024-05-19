import { Injectable } from '@angular/core';
import { ConcretePizzaBuilder } from './concretePizzaBuilder';
import { Pizza } from './pizza';
/**
 * This class serves as a director for creating different types of pizzas.
 * It utilizes the ConcretePizzaBuilder to construct specific pizzas .
 */
@Injectable({
  providedIn: 'root',
})
export class PizzaDirector {
  /**
   * Creates a Margherita pizza.
   * @returns A new Pizza object representing a Margherita pizza.
   */
  createMargheritaPizza() {
    const pizza: ConcretePizzaBuilder = new ConcretePizzaBuilder();
    pizza.setSize('medium');
    pizza.setCrust('thin');
    pizza.setSauce('tomato');
    pizza.setCheese('mozzarella');
    pizza.setToppings(['tomatoes', 'basil']);
    return pizza.build();
  }
  /**
   * Creates a Pepperoni pizza.
   * @returns A new Pizza object representing a Pepperoni pizza.
   */
  createPepperoniPizza() {
    const pizza: ConcretePizzaBuilder = new ConcretePizzaBuilder();
    pizza.setSize('large');
    pizza.setCrust('thick');
    pizza.setSauce('tomato');
    pizza.setCheese('mozzarella');
    pizza.setToppings(['pepperoni']);
    return pizza.build();
  }
  /**
   * Creates a custom pizza.
   * @param _pizza The Pizza object containing desired size, crust, sauce, cheese, and toppings.
   * @returns A new Pizza object representing a custom pizza built using the provided object.
   */
  createCustomPizza(_pizza: Pizza): Pizza {
    const pizza: ConcretePizzaBuilder = new ConcretePizzaBuilder();
    pizza.setSize(_pizza.size);
    pizza.setCrust(_pizza.crust);
    pizza.setSauce(_pizza.sauce);
    pizza.setCheese(_pizza.cheese);
    pizza.setToppings(_pizza.toppings);
    return pizza.build();
  }
}
