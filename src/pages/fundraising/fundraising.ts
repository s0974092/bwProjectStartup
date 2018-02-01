import { Component, trigger, state, style, animate, transition  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the FundraisingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fundraising',
  templateUrl: 'fundraising.html',
  styles:[
    `
      .item-block{
        min-height: 0;
        transition: 0.2s all linear;
      }
    `
  ],
  animations: [
    trigger('expand', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(90deg)'})),
      transition('void => *', animate('500ms ease-in-out')),
      transition('* <=> *', animate('500ms ease-in-out'))
    ])
  ]
})
export class FundraisingPage {
	filterList: string = "stateOneLists";
	sites: string[] = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];

	shownGroup = null;
	diseases = [
	    { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
	    { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
	    { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
	    { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
	    { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
	];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundraisingPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
	  return this.shownGroup === group;
  };

  checkFunc() {
  	event.stopPropagation();
	  alert('success!!');
  }

  onLoadCheckOutPage() {
    this.navCtrl.push(CheckoutPage);
  }

}
