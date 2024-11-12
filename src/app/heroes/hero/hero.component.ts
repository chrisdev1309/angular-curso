import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private nameInitial: string = 'ironMan';
  private ageInitial: number  = 35;

  public name: string = this.nameInitial;
  public age: number  = this.ageInitial;


  get getCapitalizedName(): string  {
    return this.name.toUpperCase();
  }


  getHeroDescription ():string {
    return `${this.name} - ${this.age}`;
  }


  changeHero():void {
    this.name = 'spiderman';
  }


  changeAge():void {
    this.age = 55;
  }


  reset() {
    this.name = this.nameInitial;
    this.age = this.ageInitial
  }


}
