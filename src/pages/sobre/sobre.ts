import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';

@Component({
    selector: 'app-sobre',
    templateUrl: './sobre.html'
  })

  export class Sobre {  

    constructor(
        private navCtrl: NavController) {         
        }      

    openListaParceiros() {
        this.navCtrl.setRoot(ListaParceiroPage);
        }         

}