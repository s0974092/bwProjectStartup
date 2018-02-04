import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { MemberPage } from '../pages/member/member';
import { AddMemberPage } from '../pages/add-member/add-member';
import { MemberProfilePage } from '../pages/member-profile/member-profile';

import { FamilyDependentPage } from '../pages/family-dependent/family-dependent';
import { AddFamilyDependentPage } from '../pages/add-family-dependent/add-family-dependent';
import { FamilyDependentProfilePage } from '../pages/family-dependent-profile/family-dependent-profile'

import { PopoverContentPage } from '../pages/popover-content/popover-content';

import { FundraisingPage } from '../pages/fundraising/fundraising';
import { CheckoutPage } from '../pages/checkout/checkout';

import { SettingsPage } from '../pages/settings/settings';

import { TabsPage } from '../pages/tabs/tabs';

import { MemberService } from '../services/member.service';
import { FamilyDependentService } from '../services/family-dependent.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MemberPage,
    FundraisingPage,
    CheckoutPage,
    SettingsPage,
    TabsPage,
    AddMemberPage,
    MemberProfilePage,
    PopoverContentPage,
    FamilyDependentPage,
    AddFamilyDependentPage,
    FamilyDependentProfilePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {mode: 'ios', tabsPlacement: 'bottom', tabsHideOnSubPages: true, backButtonText: ''})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MemberPage,
    FundraisingPage,
    CheckoutPage,
    SettingsPage,
    TabsPage,
    AddMemberPage,
    MemberProfilePage,
    PopoverContentPage,
    FamilyDependentPage,
    AddFamilyDependentPage,
    FamilyDependentProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberService,
    FamilyDependentService
  ]
})
export class AppModule {}
