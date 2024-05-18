import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/Factory Method/character';
import { CharacterFactory } from './character-factory';
import { Warrior } from './warrior';

@Injectable({
  providedIn: 'root',
})

/**
 * Class representing a Warrior Factory that creates Warrior characters.
 */
export class WarriorFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Warrior();
  }
}
