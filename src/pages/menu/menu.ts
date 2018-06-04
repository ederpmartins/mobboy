import { Component } from '@angular/core';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';
import { CadastroParceiro } from '../cadastro-parceiro/cadastro-parceiro';

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

  openCadastroParceiro() {
    this.rootPage = CadastroParceiro;
  }

}