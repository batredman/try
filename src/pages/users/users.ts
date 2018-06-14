import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';


// @IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController){
  }
  onLoadUser(name: string){
    console.log("entrar");
    this.navCtrl.push(UserPage,{userName: name});
    console.log("salir");

  }
  ionViewCanEnter(): boolean | Promise<boolean>{
console.log("ionViewCanEnter");
const rnd = Math.random();
console.log(rnd);
return rnd > 0.7;
  }

  ionViewDidLoad(){
    console.log("DidLoad");
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }
  ionViewDidEnter(){
    console.log("didEnter");
  }
  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
      
      
  }

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  


