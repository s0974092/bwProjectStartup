import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddMemberPage } from '../add-member/add-member';
import { MemberProfilePage } from '../member-profile/member-profile';

import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';

/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
	private members: Member[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private memberService: MemberService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
  }

  ionViewWillEnter() {
  	this.members = this.memberService.getMembers();
    console.log('this.members: ' + JSON.stringify(this.members.slice()));
  }

  onLoadAddMemberPage() {
  	this.navCtrl.push(AddMemberPage);
  }

  onLoadMemberProfilePage(setMember) {
    let getMember = setMember;
    console.log('getMember 1: ' + JSON.stringify(getMember));
    this.navCtrl.push(MemberProfilePage, getMember);
  }

}
