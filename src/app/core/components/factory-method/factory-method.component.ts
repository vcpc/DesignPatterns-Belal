import { Component, OnInit } from '@angular/core';
import { GameManager } from '../../classes/factory method/gameManger';

/**
 * FactoryMethodComponent is responsible for allowing the user to select a character type
 * and displaying a message indicating the selected character or an error message.
 */
@Component({
  selector: 'app-factory-method',
  standalone: true,
  imports: [],
  templateUrl: './factory-method.component.html',
  styleUrl: './factory-method.component.css',
})
export class FactoryMethodComponent {
  /**
   * `message` to display the selected character or an error message.
   */
  message: string = '';

  /**
   * Creates an instance of FactoryMethodComponent.
   * @param gameManager - The calss used to manage character creation.
   */
  constructor(private _gameManager: GameManager) {}

  /**
   * Handles the selection of a character type.
   * Sets the message based on the selected character and logs the message to the console.
   * @param characterType - The type of character to select.
   */
  selectCharacter(characterType: string): void {
    const factory = this._gameManager.selectFactory(characterType);
    if (factory) {
      const character = this._gameManager.createCharacter(factory);
      if (character) {
        character.attack();
        this.message = `Selected character: ${characterType}`;
      } else {
        this.message = 'Character creation failed.';
      }
    } else {
      this.message = 'Invalid character type selected';
    }
  }
}
