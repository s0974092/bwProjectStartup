import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  noticeList: string = "toDoLists";	
  checkboxValue: boolean;
  slideData = [{ image: "../assets/imgs/cover_1.jpg" },{ image: "../assets/imgs/cover_2.jpg" },{ image: "../assets/imgs/cover_3.jpg" }]

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  checkFunc() {
  	if(this.checkboxValue) {
  		console.log("test!!!");
	  	let toast = this.toastCtrl.create({
	      message: 'User was added successfully',
	      duration: 3000,
	      position: 'top'
	    });
	    toast.present();
  	}
  }

  public clearInputText() {
  	event.stopPropagation();
	  alert('success!!');
  }

}
