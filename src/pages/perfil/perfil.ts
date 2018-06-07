import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.html'
  })

  export class Perfil {

    public usuario: any = {};
    public ID: string;
  
    constructor(
      private AfAuth: AngularFireAuth,
      private db: AngularFirestore,
      private navCtrl: NavController,
      private navParams: NavParams  ) {  
        
        let ID = AfAuth.auth.currentUser.uid;
          
        // db.collection<any>('Parceiro', ref => ref.orderBy('nome')).valueChanges().subscribe((_lista) => {
        db.collection('usuarios').doc(ID).valueChanges().subscribe((_usuario) => { this.usuario = _usuario; })
      }

    openListaParceiros() {
    this.navCtrl.setRoot(ListaParceiroPage);
    }      
    
    // salvar(form: NgForm){

    //     let nome : string = form.value.nome;
    //     let email : string = form.value.email;
    
    //      const obj = {
    //       'nome' : nome,
    //       'email' : email
    //     }
    //       let id=this.ID;
    //       this.db.collection('usuarios').doc(id).update(obj).then(() =>
    //         {
    //           this.navCtrl.pop();
    //         })
            
        //this.openListaParceiros();
    //  }
        
}