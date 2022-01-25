import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/models/stat';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
})
export class StatComponent implements OnInit {
  mort: Statistique;

  constructor() {
    this.mort = new Statistique('Morts', 20, 50);
  }

  ngOnInit(): void {}
}
