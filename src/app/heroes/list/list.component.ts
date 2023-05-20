import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Thor', 'Ironman', 'Antman', 'Black Panter'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroes.pop();
  }
}
