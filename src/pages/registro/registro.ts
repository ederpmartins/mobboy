import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import {AlertController} from 'ionic-angular';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.html'
})
export class Registro  {

  constructor( private afAuth: AngularFireAuth,
               private alertCtrl: AlertController,
               private db: AngularFirestore) {}

  public registrar(form: NgForm) : void{
    
    let nome: string = form.value.nome;
    let email: string = form.value.email;
    let senha: string = form.value.senha;

    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
    .then((user) => {
      this.db.collection('usuarios').doc(user.uid).set({
        nome: nome,
        email: email
      })
    })

    .catch((error) =>{
      this.alertCtrl.create({
        title: 'Erro no registro',
        subTitle : error.message,
        buttons:["Ok"]
      }).present()
    });

  }
}