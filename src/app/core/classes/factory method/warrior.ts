import { Character } from '../../interfaces/Factory Method/character';
/**
 * Class representing a Warrior character.
 * @implements {Character}
 */
export class Warrior implements Character {
  attack(): string {
    return 'Warrior';
  }
}
