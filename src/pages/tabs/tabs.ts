import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MemberPage } from '../member/member';
import { FundraisingPage } from '../fundraising/fundraising';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  memberRoot = MemberPage
  fundraisingRoot = FundraisingPage
  settingsRoot = SettingsPage


  constructor(public navCtrl: NavController) {}

}
