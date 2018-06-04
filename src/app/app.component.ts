import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Login } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuComponent } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;// = LoginPage; //ListaClientePage;

  constructor(platform: Platform,
              private afAuth: AngularFireAuth) {

    platform.ready().then(() => {

      afAuth.authState.subscribe((auth) => {
        if(auth == null){
          this.rootPage = Login;
        } else{
          this.rootPage = MenuComponent;
        }
      })
    });
  }
}
