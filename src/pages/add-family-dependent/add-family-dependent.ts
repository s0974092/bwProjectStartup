import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FamilyDependent } from '../../models/family-dependent';

import { FamilyDependentService } from '../../services/family-dependent.service';
/**
 * Generated class for the AddFamilyDependentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-family-dependent',
  templateUrl: 'add-family-dependent.html',
})
export class AddFamilyDependentPage {
  private memberTypeList = ['學員', '福友'];
  private relationshipTypeList = ['夫妻', '父子', '兄弟', '姐妹', '其他'];
  private selectedRelationshipType;
  private selectedMemberType;
  private getMemberId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public familyDependentService: FamilyDependentService) {
    this.getMemberId =  this.navParams.get('id');
    console.log('getMemberId: ' + this.getMemberId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFamilyDependentPage');
  }

  onAddFamilyDependent(value: FamilyDependent) {
    value.memberId = this.getMemberId;
  	this.familyDependentService.addFamilyDependent(value);
  	this.navCtrl.pop();
  }

  selectRelationshipType() {
    console.log('selectedRelationshipType: ' + this.selectedRelationshipType);
  }

  selectMemberType() {
    console.log('selectedMemberType: ' + this.selectedMemberType);
  }

}
