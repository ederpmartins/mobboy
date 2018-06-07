import { Component } from '@angular/core';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';
import { CadastroParceiro } from '../cadastro-parceiro/cadastro-parceiro';
import { Perfil } from '../perfil/perfil';
import { Sobre } from '../sobre/sobre';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html'
})
export class MenuComponent {

  rootPage : any = ListaParceiroPage;

  constructor() { }

  openListaParceiros() {
    this.rootPage = ListaParceiroPage;
  }

  openPerfil() {
    this.rootPage = Perfil;
  }  

  openCadastroParceiro() {
    this.rootPage = CadastroParceiro;
  }

  openSobre() {
    this.rootPage = Sobre;
  }

}