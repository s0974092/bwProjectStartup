import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { FamilyDependent } from '../../models/family-dependent';

import { FamilyDependentService } from '../../services/family-dependent.service';
/**
 * Generated class for the FamilyDependentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-family-dependent-profile',
  templateUrl: 'family-dependent-profile.html',
})
export class FamilyDependentProfilePage {
  private familyDependent: FamilyDependent;
  private editMode: Boolean = false;
  private editFamilyDependent: FamilyDependent;
  private memberTypeList = ['學員', '福友'];
  private relationshipTypeList = ['夫妻', '父子', '兄弟', '姐妹', '其他'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public familyDependentService: FamilyDependentService,
  			  public platform: Platform) {
    console.log('test!!!');
    console.log(this.navParams.data);
    this.familyDependent = Object.assign({}, this.navParams.data);
    this.editFamilyDependent = Object.assign({}, this.navParams.data);

    let backAction =  platform.registerBackButtonAction(() => {
        console.log("second");
        this.navCtrl.pop();
        backAction();
      },2)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyDependentProfilePage');
  }

  onEditMode():void {
  	this.editMode = !(this.editMode);
  	console.log('this.editFamilyDependent: ' + JSON.stringify(this.editFamilyDependent));
  	console.log('this.familyDependent: ' + JSON.stringify(this.familyDependent));
  	// 回復原本的未修改前的狀態
	  this.editFamilyDependent = Object.assign({}, this.familyDependent);
  }

  onEdit() {
  	this.editMode = !(this.editMode);
  	console.log('this.familyDependent be: ' + JSON.stringify(this.familyDependent));
  	this.familyDependent = Object.assign({}, this.editFamilyDependent);
  	this.familyDependentService.updateAllFamilyDependents(this.familyDependent);
  	console.log('this.editMember af assgin: ' + JSON.stringify(this.editFamilyDependent));
  	console.log('this.familyDependent af: ' + JSON.stringify(this.familyDependent));
  	console.log('this.familyDependentService.getMembers(): ' + JSON.stringify(this.familyDependentService.getFamilyDependents()));
  }

  goBack() {
  	this.navCtrl.pop();
  }

}
