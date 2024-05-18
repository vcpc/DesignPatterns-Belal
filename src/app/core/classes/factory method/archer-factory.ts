import { Character } from '../../interfaces/Factory Method/character';
import { Archer } from '../archer';
import { CharacterFactory } from './character-factory';
/**
 * Class representing an Archer Factory that creates Archer characters.
 */
class ArcherFactory extends CharacterFactory {
  createCharacter(): Character {
    return new Archer();
  }
}
