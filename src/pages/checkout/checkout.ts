import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  sites: string[] = ['Taobao', 'Facebook', 'Google', 'WeChat'];
  paymentMethodList = ['匯款', '櫃檯'];
  bankList = ['台灣銀行', '華南銀行'];
  selectedMethod;
  selectedBank;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  public optionsFn(): void {
  	console.log(this.selectedMethod);
  }

  selectMethod() {
  	console.log(this.selectedMethod);
  }

  checkSelect() {
  	if(this.selectedMethod.method == '匯款') {
  		return true;
  	} else {
  		return false;
  	}

  }

  selectBank() {
    console.log(this.selectedBank);
  }

}
