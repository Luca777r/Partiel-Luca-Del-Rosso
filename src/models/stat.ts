export class Statistique {
  public nom: string;
  public nombre: number;
  public pourcents: number;
  constructor(unNom: string, unNombre: number, unPourcents: number) {
    this.nom = unNom;
    this.nombre = unNombre;
    this.pourcents = unPourcents;
  }
}

let mort2017 = new Statistique('Mort', 70, 30);
