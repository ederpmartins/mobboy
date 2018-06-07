import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {

  public lista: Array<Usuario> = new Array<Usuario>();  

  constructor() { }

  read() {
    return this.lista;
  }

  create(usuario : Usuario) {
    this.lista.push(usuario);
  }
  

}