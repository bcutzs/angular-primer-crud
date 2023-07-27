import { Injectable } from '@angular/core';
import { Character } from '../interfaces/caracter.interface';
import { v4 as uuid } from 'uuid';



@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9200,
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];

  addCharacter( character: Character):void {
    const newCharacter:Character = { id: uuid(),...character };

    this.characters.push(newCharacter);
  }

  //info: se elimina por index pero no es lo recomendado por eso se crea otro metodo para eliminar por id
  // onDeleteCharacter(indexDeleted: number):void {
  //   //elimina el objeto en el index segun el array   1 significa que solo se va a eliminar un elemento
  //   this.characters.splice(indexDeleted, 1);
  // }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id )
  }

}
