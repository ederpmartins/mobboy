import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';

@Component({
    selector: 'app-contatar',
    templateUrl: './contatar.html'
  })

  export class Contatar {
  
    public parceiro: any = {};
  
    constructor(
      private db: AngularFirestore,
      private navCtrl: NavController,
      private navParams: NavParams  ) { 
        
        let id = navParams.get('id');
        db.collection("Parceiro").doc(id).valueChanges().subscribe((dados) => {
          this.parceiro = dados;
        })
      }

      openListaParceiros() {
        this.navCtrl.setRoot(ListaParceiroPage);
      }

}
      