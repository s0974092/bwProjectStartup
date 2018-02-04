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
  public searchQuery: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private memberService: MemberService) {
  }

  ionViewDidLoad() {
    this.setInVaileData();
    console.log('ionViewDidLoad MemberPage');
  }

  ionViewWillEnter() {
    this.searchQuery = '';
    this.search();
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


  search(){
    console.log('searchQuery:  ' + this.searchQuery);
    if(this.searchQuery === ''){
      console.log('this.queryText 空白');
      this.members = this.memberService.getMembers();
    }else{
      console.log('this.queryText no 空白'); 
      this.members = this.memberService.getSearchMembers(this.searchQuery);
    }
  }

  setInVaileData(){
    let v1: Member = {
      id:0,
      name: '曾福氣',
      idCard: 'A123456789',
      idCardLast4: '9876',
      cellPhoneNumber: '0987654321',
      homeNumber: '',
      email: '',
      memberType: '',
      notifyType: '',
      address: '',
      updateDate: new Date('2018-01-12T00:00:00')
    };
    this.memberService.addMember(v1);
    let v2: Member = {
      id:0,
      name: '郝慈悲',
      idCard: 'A123456789',
      idCardLast4: '9876',
      cellPhoneNumber: '0987654321',
      homeNumber: '',
      email: '',
      memberType: '',
      notifyType: '',
      address: '',
      updateDate: new Date('2018-01-20T00:00:00')
    };
    this.memberService.addMember(v2);
  }
}
