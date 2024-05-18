import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/Factory Method/character';
@Injectable({
  providedIn: 'root',
})

/**
 * Abstract base class representing a Character Factory.
 */
export abstract class CharacterFactory {
  /**
   * Abstract method to be implemented by concrete factory classes to create characters.
   * @returns A Character object.
   */
  abstract createCharacter(): Character;
}
