import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroParceiro } from '../cadastro-parceiro/cadastro-parceiro';
import { Parceiro } from '../../models/parceiro';
//import { ClienteService } from '../../providers/cliente.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Edita } from '../edita/edita';
import { Contatar } from '../contatar/contatar';
import { Geolocation } from '@ionic-native/geolocation';
import { HaversineService, GeoCoord } from "ng2-haversine";

@Component({
  selector: 'app-listaparceiro',
  templateUrl: './listaparceiro.html'
})
export class ListaParceiroPage {

  public lista : any[] = [];//Observable<Parceiro[]>;
  public latOri: number = 0;
  public lngOri: number = 0;    
  public kilometers;

  constructor(public nvCtrl: NavController,
              public db: AngularFirestore,           
              public afAuth: AngularFireAuth,
              public asCtrl: ActionSheetController,
              public geolocation : Geolocation,
              private _haversineService: HaversineService) {

    //  this.getLocation();

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latOri = resp.coords.latitude
      this.lngOri =  resp.coords.longitude

    }).then(() => {

      let inicio: GeoCoord = {
        latitude: this.latOri,
        longitude: this.lngOri
     };

      db.collection<any>('Parceiro', ref => ref.orderBy('nome')).valueChanges().subscribe((_lista) => {
        
        this.lista = [];

        _lista.forEach((item) => {

          let fim: GeoCoord = {
              latitude: item.latitude,
              longitude: item.longitude
          };

          item.km = this._haversineService.getDistanceInKilometers(inicio, fim);

          this.lista.push(item);
        });

        this.lista.sort(this.compare);
        
      })

    });
      // this.tryHaversine();
  }

  compare(a, b) {
    if(a.km < b.km) return -1;
    if(a.km > b.km) return 1;
    else return 0;
  }


  async getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latOri = resp.coords.latitude
    this.lngOri =  resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }  

// tryHaversine(): void {
 
//     let inicio: GeoCoord = {
//         latitude: this.latOri,
//         longitude: this.lngOri
//     };
 
//     let fim: GeoCoord = {
//         latitude: 43.262985,
//         longitude: -2.935013
//     };

//     this.kilometers = this._haversineService.getDistanceInKilometers(inicio, fim);

//     console.log(`
//         The distance between Madrid and Bilbao is:
//     `);
// }  


   public add() : void{
     this.nvCtrl.push(CadastroParceiro);
   }

   public logout() : void{
     this.afAuth.auth.signOut();
   }

  //  public gerenciar (id: string): void{
  //    this.asCtrl.create({
  //      buttons:[
  //        {
  //        text: "Apagar",
  //        role:"destructive",
  //        handler:()=>{
  //          this.db.doc("Parceiro/"+ id).delete();
  //        }
  //      },
  //      {
  //        text: "Editar",
  //        handler:()=>{
  //          this.nvCtrl.push(Edita,{id: id});
  //        }
  //      },
  //      {
  //      text:"Cancelar",
  //      role:"cancel"
  //      }
  //      ]
  //    }).present();
  //  }  

  public contatar (id: string): void{
    this.nvCtrl.push(Contatar,{id: id});
   }    

}

