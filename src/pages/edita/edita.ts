import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {NavController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.html'
})
export class Edita {

  public parceiro: any = {};

  constructor(
    private db: AngularFirestore,
    private navCtrl: NavController,
    public afAuth: AngularFireAuth,
    private navParams: NavParams  ) { 
      
      let id = navParams.get('id');
      db.collection("Parceiro").doc(id).valueChanges().subscribe((dados) => {
        this.parceiro = dados;
      })
    }

 salvar(form: NgForm){

    let nome : string = form.value.nome;
    let veiculo : string = form.value.veiculo;
    let placa : string = form.value.placa;

     const obj = {
      'nome' : nome,
      'veiculo' : veiculo,
      'placa' : placa
    }
      let id=this.navParams.get('id');
    //this.clienteService.create(parceiro);
      this.db.collection('Parceiro').doc(id).update(obj).then(() =>
        {
          this.navCtrl.pop();
        })
        
    
 }

}