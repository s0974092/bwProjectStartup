import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, Platform, ActionSheetController } from 'ionic-angular';
import { Member } from '../../models/member';
import { PopoverContentPage } from '../popover-content/popover-content';
import { FamilyDependentPage } from '../family-dependent/family-dependent';

import { MemberService } from '../../services/member.service';

// import { MemberService } from '../../services/member.service';

/**
 * Generated class for the MemberProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-member-profile',
  templateUrl: 'member-profile.html',
})
export class MemberProfilePage {
  private member: Member;
  private editMode: Boolean = false;
  private editMember: Member;
  private memberTypeList = ['學員', '福友'];
  private memberNotifyList = ['簡訊通知', 'Email通知', '不通知'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,
  			  public platform: Platform, private memberService: MemberService, public actionsheetCtrl: ActionSheetController) {
  	console.log('test!!!');
    console.log(this.navParams.data);
    this.member = Object.assign({}, this.navParams.data);
    this.editMember = Object.assign({}, this.navParams.data);

    let backAction =  platform.registerBackButtonAction(() => {
        console.log("second");
        this.navCtrl.pop();
        backAction();
      },2)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberProfilePage');
  }
  // popover action
  presentPopover(popEvent) {
    let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: popEvent
    });
  }
  // action sheet
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '新增募款',
          handler: () => {
            console.log('新增募款 clicked');
          }
        },
        {
          text: '眷屬列表',
          handler: () => {
            console.log('眷屬列表 clicked');
            this.navCtrl.push(FamilyDependentPage, this.member);
          }
        },
        {
          text: '募款列表',
          handler: () => {
            console.log('募款列表 clicked');
          }
        },
        {
          text: '募款設定',
          handler: () => {
            console.log('募款設定 clicked');
          }
        },
        {
          text: '刪除會員',
          handler: () => {
            console.log('刪除會員 clicked');
          }
        },        
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  onEditMode():void {
  	this.editMode = !(this.editMode);
  	console.log('this.editMember: ' + JSON.stringify(this.editMember));
  	console.log('this.member: ' + JSON.stringify(this.member));
  	// 回復原本的未修改前的狀態
	  this.editMember = Object.assign({}, this.member);
  }

  onEdit() {
  	this.editMode = !(this.editMode);
  	console.log('this.member be: ' + JSON.stringify(this.member));
  	this.member = Object.assign({}, this.editMember);
  	this.memberService.updateAllMembers(this.member);
  	console.log('this.editMember af assgin: ' + JSON.stringify(this.editMember));
  	console.log('this.member af: ' + JSON.stringify(this.member));
  	console.log('this.memberService.getMembers(): ' + JSON.stringify(this.memberService.getMembers()));
  }

  goBack() {
  	this.navCtrl.pop();
  }

}
