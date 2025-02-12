import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Batman','IronMan','Thor','Hulk'];
  public deletedItem?: string = '';

  removeItem():void {
    this.deletedItem = this.heroNames.pop();
  }

}
