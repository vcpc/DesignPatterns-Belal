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
  constructor(
    private _warriorFactory: WarriorFactory,
    private _mageFactory: MageFactory,
    private _archerFactory: ArcherFactory
  ) {}

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

  createCharacter(factory: CharacterFactory): Character | null {
    if (!factory) {
      return null;
    }
    return factory.createCharacter();
  }
}
