import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';
/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {
  private memberTypeList = ['學員', '福友'];
  private memberNotifyList = ['簡訊通知', 'Email通知', '不通知'];
  private selectedMemberType;
  private selectedNotifyType;

  constructor(public navCtrl: NavController, private memberService: MemberService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMemberPage');
  }

  onAddMember(value1: Member) {
  	this.memberService.addMember(value1);
  	this.navCtrl.pop();
  }

  selectMemberType() {
    console.log('selectedMemberType' + this.selectedMemberType);
  }

  selectNotifyType() {
    console.log('selectedNotifyType' + this.selectedNotifyType);
  }

}
