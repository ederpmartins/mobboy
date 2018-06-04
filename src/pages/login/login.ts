import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaParceiroPage } from '../listaparceiro/listaparceiro';
import { NavController, AlertController  } from 'ionic-angular';

import {Registro} from '../registro/registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class Login {

  constructor(private AfAuth: AngularFireAuth,
              private navCtrl: NavController,
              private alertCtrl: AlertController) { }

  public registrar(): void{
    this.navCtrl.push(Registro);
  }

  acessar(form: NgForm) {
    let email: string = form.value.email;
    let senha: string = form.value.senha;

    this.AfAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((user) => {
        this.navCtrl.setRoot(ListaParceiroPage);
      })
      .catch((error) => {
        this.alertCtrl.create({
          title: "Falha na Autenticação",
          subTitle: this.getMessage(error.code),
          buttons: ["OK"]
        }).present();
      });
  }    

  private getMessage(code: string) : string{
    switch(code) {

      case "auth/invalid-email":
        return "E-mail não encontrado. Verifique!";

      case "auth/user-disable":
        return "Usuário bloqueado. Verifique!";   

      case "auth/user-not-found":
        return "Usuário não encontrado. Verifique!";

      case "auth/wrong-password":
        return "Senha incorreta. Verifique!";     
    }
  }  
  
}