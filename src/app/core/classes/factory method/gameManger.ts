import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/Factory Method/character';
import { ArcherFactory } from './archer-factory';
import { CharacterFactory } from './character-factory';
import { MageFactory } from './mage-factory';
import { WarriorFactory } from './warrior-factory';

@Injectable({
  providedIn: 'root',
})
export class GameManager {
  /**
   * @constructor
   * @param _warriorFactory Injected instance of WarriorFactory.
   * @param _mageFactory Injected instance of MageFactory.
   * @param _archerFactory Injected instance of ArcherFactory.
   */
  constructor(
    private _warriorFactory: WarriorFactory,
    private _mageFactory: MageFactory,
    private _archerFactory: ArcherFactory
  ) {}
  /**
   * This method selects the appropriate CharacterFactory based on the provided character type string.
   * @param characterType A string representing the type of character to be created ("Warrior", "Mage", "Archer").
   * @returns A CharacterFactory instance or null if the character type is not recognized.
   */
  selectFactory(characterType: string): CharacterFactory | null {
    switch (characterType) {
      case 'Warrior':
        return this._warriorFactory;
      case 'Mage':
        return this._mageFactory;
      case 'Archer':
        return this._archerFactory;
      default:
        return null;
    }
  }
  /**
   * This method creates a Character instance using the provided CharacterFactory.
   * @param factory A CharacterFactory instance obtained from selectFactory.
   * @returns A Character instance or null if the factory is invalid.
   */
  createCharacter(factory: CharacterFactory): Character | null {
    if (!factory) {
      return null;
    }
    return factory.createCharacter();
  }
}
