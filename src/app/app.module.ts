import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ListaParceiroPage } from '../pages/listaparceiro/listaparceiro';
import { CadastroParceiro } from '../pages/cadastro-parceiro/cadastro-parceiro';
import { ParceiroService } from '../providers/parceiro.service';
import { Login } from '../pages/login/login';
import { Registro } from '../pages/registro/registro';
import { Edita } from '../pages/edita/edita';
import { MenuComponent } from '../pages/menu/menu';

import { Geolocation } from '@ionic-native/geolocation';
import { HaversineService } from "ng2-haversine";

const config = {
    apiKey: "AIzaSyCGRz2VtOiOZs1Z5nF0rAG5KtCTOGX_bR8",
    authDomain: "mobboydata.firebaseapp.com",
    databaseURL: "https://mobboydata.firebaseio.com",
    projectId: "mobboydata",
    storageBucket: "mobboydata.appspot.com",
    messagingSenderId: "12898749423"
  };

@NgModule({
  declarations: [
    MyApp,
    Login,
    ListaParceiroPage,
    CadastroParceiro,
    Registro,
    Edita, 
    MenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaParceiroPage,
    CadastroParceiro,
    Login, 
    Registro,
    Edita,
     MenuComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParceiroService,
    Geolocation,
    HaversineService
  ]
})
export class AppModule {}
