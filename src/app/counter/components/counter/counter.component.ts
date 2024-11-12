import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{ counter }}</h3>
    <button (click)="incrementa(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementa(-1)">-1</button>

  `
})

export class CounterComponent {

  public valorInicial: number = 10;
  public counter: number = this.valorInicial;

  constructor() { }

  incrementa(valor: number):void {
    this.counter += valor;
  }

  reset() {
    this.counter = this.valorInicial;
  }


}
