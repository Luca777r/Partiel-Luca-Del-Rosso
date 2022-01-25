import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nbNaissance: number;
  nbMort: number;

  constructor() {
    this.nbNaissance = 35;
    this.nbMort = 70;
  }
}
