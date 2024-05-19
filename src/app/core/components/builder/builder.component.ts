import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PizzaDirector } from './../../classes/builder/pizza-director';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pizza } from '../../classes/builder/pizza';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css',
})
export class BuilderComponent {
  /** Array to store selected toppings */
  toppings: string[] = [];
  /** Holds the built pizza object */
  pizza!: Pizza;
  /** Flag to trigger validation message */
  startValidation: boolean = false;
  constructor(
    /** Injected PizzaDirector service */
    private _PizzaDirector: PizzaDirector,
    /** Injected FormBuilder service */
    private _FormBuilder: FormBuilder
  ) {}
  /**
   * FormGroup with form controls and validators for pizza configuration
   */
  customPizzaForm: FormGroup = this._FormBuilder.group({
    size: ['', [Validators.required]],
    crust: ['', [Validators.required]],
    sauce: ['', [Validators.required]],
    cheese: ['', [Validators.required]],
    toppings: [[], [Validators.required]],
  });
  /**
   * Handles checkbox change events for toppings selection
   * @param e Event object from the checkbox change
   */
  onCheckboxChange(e: any) {
    if (!this.toppings.includes(e.target.value)) {
      this.toppings.push(e.target.value);
    } else {
      this.toppings.splice(this.toppings.indexOf(e.target.value), 1);
    }
  }
  /**
   * Builds a Margherita pizza and sets pizza
   *clear validation of custom pizza if the clint choose to order menu pizza rather than the custom pizza and he was not fill all inputs
   */
  onMargheritaPizzaClick(): void {
    this.startValidation = false;
    const pizza = this._PizzaDirector.createMargheritaPizza();
    this.pizza = pizza;
  }
  /**
   * Builds a Margherita pizza and sets pizza
   *clear validation of custom pizza if the clint choose to order menu pizza rather than the custom pizza and he was not fill all inputs
   */
  onPepperoniPizzaClick(): void {
    this.startValidation = false;
    const pizza = this._PizzaDirector.createPepperoniPizza();
    this.pizza = pizza;
  }
  /**
   * Builds a custom pizza based on user input and performs validation to hangle errors
   */
  onCustomPizzaSubmit(): void {
    this.startValidation = true;
    this.customPizzaForm.get('toppings')?.setValue(this.toppings);
    const customPizza = this._PizzaDirector.createCustomPizza(
      this.customPizzaForm.value
    );
    if (this.customPizzaForm.valid) {
      this.startValidation = false;
      this.pizza = customPizza;
    } else {
      this.startValidation = true;
    }
  }
}
