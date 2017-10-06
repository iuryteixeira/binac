import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedOption: string;
  ipNumber: string;
  labelField: string = "Número";
  inpState: boolean = true;

  constructor(public navCtrl: NavController) {

  }

  /**
   * response to options of select
   */
  selectClick() {
    this.changeLabel();
    this.inpState = false;
  }

  /**
   * change field label with base in the selection
   */
  changeLabel() {
    if (this.selectedOption == 'bin') {
      this.labelField = "Insira o binário";
    } 
    if (this.selectedOption == 'oct') {
      this.labelField = "Insira o octal";
    }
    if (this.selectedOption == 'dec') {
      this.labelField = "Insira o decimal";
    }
    if (this.selectedOption == 'hex') {
      this.labelField = "Insira o hexa";
    }
  }


}
