import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FamilyDependent } from '../../models/family-dependent';

import { AddFamilyDependentPage } from '../add-family-dependent/add-family-dependent';
import { FamilyDependentProfilePage } from '../family-dependent-profile/family-dependent-profile';

import { FamilyDependentService } from '../../services/family-dependent.service';
/**
 * Generated class for the FamilyDependentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-family-dependent',
  templateUrl: 'family-dependent.html',
})
export class FamilyDependentPage {
  private memberName: string;
  private familyDependents: FamilyDependent[] = [];
  public searchQuery: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public familyDependentService: FamilyDependentService) {
  	this.memberName = this.navParams.get('name');
  	console.log('this.memberName: ' + this.memberName);

    // this.familyDependents = this.familyDependentService.getFamilyDependentsByMemberId(this.navParams.get('id'));
    
  }

  ionViewDidLoad() {
    // this.setInVaileData();
    console.log('ionViewDidLoad FamilyDependentPage');
  }

  ionViewWillEnter() {
    this.searchQuery = '';
    this.search();
    console.log('this.familyDependents: ' + JSON.stringify(this.familyDependents.slice()));
  }

  onLoadAddFamilyDependentPage() {
  	this.navCtrl.push(AddFamilyDependentPage, this.navParams.data);
  }

  onLoadFamilyDependentProfilePage(setFamilyDependent) {
    let getFamilyDependent = setFamilyDependent;
    console.log('getFamilyDependent: ' + JSON.stringify(getFamilyDependent));
    this.navCtrl.push(FamilyDependentProfilePage, getFamilyDependent);
  }

  search(){
    console.log('searchQuery:  ' + this.searchQuery);
    if(this.searchQuery === ''){
      console.log('this.queryText 空白');
      this.familyDependents = this.familyDependentService.getFamilyDependentsByMemberId(this.navParams.get('id'));
    }else{
      console.log('this.queryText no 空白'); 
      this.familyDependents = this.familyDependentService.getSearchFamilyDependents(this.searchQuery);
    }
  }

  setInVaileData(){
    let v1: FamilyDependent = {
      id:0,
      memberId:0,
      name: '曾福德',
      relationshipType: '夫妻',
      idCard: 'A123456789',
      idCardLast4: '9876',
      cellPhoneNumber: '0987654321',
      email: '',
      memberType: '',
      updateDate: new Date('2018-02-02T00:00:00')
    };
    this.familyDependentService.addFamilyDependent(v1);
    let v2: FamilyDependent = {
      id:1,
      memberId:1,
      name: '曾福智',
      relationshipType: '姐妹',
      idCard: 'A123456789',
      idCardLast4: '9876',
      cellPhoneNumber: '0987654321',
      email: '',
      memberType: '',
      updateDate: new Date('2018-02-02T00:00:00')
    };
    this.familyDependentService.addFamilyDependent(v2);
  }

}
