import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/Factory Method/character';
import { CharacterFactory } from './character-factory';
import { Mage } from './mage';

@Injectable({
  providedIn: 'root',
})

/**
 * Class representing a Mage Factory that creates Mage characters.
 *  * @extends {CharacterFactory}
 */
export class MageFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Mage();
  }
}
