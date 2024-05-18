import { Character } from '../../interfaces/Factory Method/character';
/**
 * Class representing an Archer character.
 * @implements {Character}
 */
export class Archer implements Character {
  attack(): string {
    return 'Archer';
  }
}
