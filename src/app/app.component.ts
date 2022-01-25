import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public nom: string;
  public nombre: number;
  public pourcents: number;
  constructor() {
    this.nom = 'mort';
    this.nombre = 70;
    this.pourcents = 50;
  }
}

export class Statistique {}
