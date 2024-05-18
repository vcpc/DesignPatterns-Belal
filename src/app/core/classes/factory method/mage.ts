import { Character } from '../../interfaces/Factory Method/character';
/**
 * Class representing a Mage character.
 */
export class Mage implements Character {
  attack(): string {
    return 'Mage';
  }
}
