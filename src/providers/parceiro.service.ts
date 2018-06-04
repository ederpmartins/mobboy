import { Injectable } from '@angular/core';
import { Parceiro } from '../models/parceiro';

@Injectable()
export class ParceiroService {

  public lista: Array<Parceiro> = new Array<Parceiro>();  

  constructor() { }

  read() {
    return this.lista;
  }

  create(parceiro : Parceiro) {
    this.lista.push(parceiro);
  }
  

}