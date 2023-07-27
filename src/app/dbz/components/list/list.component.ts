import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public listCharacter:Character[] = []

  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ):void {

    if(!id) return;

    this.onDeleteCharacterEvent.emit(id);
  }

}
