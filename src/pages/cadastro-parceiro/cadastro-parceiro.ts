import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';//import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFirestore } from 'angularfire2/firestore';//import { AngularFireAuth } from 'angularfire2/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro'

@Component({
  selector: 'app-cadastro-parceiro',
  templateUrl: './cadastro-parceiro.html'
})
export class CadastroParceiro {

  public ref: any;

  public lat: number = 0;
  public lng: number = 0;  

  //constructor(public clienteService: ClienteService,
  constructor(public db: AngularFirestore,
    public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public geolocation : Geolocation) { 
    }

  async salvar(form: NgForm){

    let nome : string = form.value.nome;
    let veiculo : string = form.value.veiculo;
    let placa : string = form.value.placa;
    let uid = await this.afAuth.auth.currentUser.uid;


    this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude
    this.lng =  resp.coords.longitude
    
     const obj = {
      'nome' : nome,
      'veiculo' : veiculo,
      'placa' : placa,
      'uid' : uid,
      'latitude' : this.lat,
      'longitude' : this.lng
    }

    //this.clienteService.create(parceiro);
    this.db.collection('Parceiro').add(obj).then((ref)=> {
        this.db.collection('Parceiro').doc(ref.id).update({id: ref.id}).then(() =>
        {
          //this.navCtrl.pop();
        })

    });

    this.navCtrl.setRoot(ListaParceiroPage);

    }).catch((error) => {
      console.log('Error getting location', error);
    });    
    
  }
  
  //async getLocation() {
  //  this.geolocation.getCurrentPosition().then((resp) => {
  //  this.lat = resp.coords.latitude
  //  this.lng =  resp.coords.longitude
  //  }).catch((error) => {
  //    console.log('Error getting location', error);
  //  });
  //}

}