import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/Factory Method/character';
import { Archer } from './archer';
import { CharacterFactory } from './character-factory';

@Injectable({
  providedIn: 'root',
})

/**
 * Class representing an Archer Factory that creates Archer characters.
 */
export class ArcherFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Archer();
  }
}
