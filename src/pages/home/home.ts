import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedOption: string;
  textNumber: string;
  labelField: string = "Número";
  inpState: boolean = true;
  results: ResultNumbers;

  constructor(public navCtrl: NavController, 
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController) {

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
    this.results = null;
    if (this.selectedOption == 'bin') {
      this.labelField = "Insira o número em base 2";
    }
    if (this.selectedOption == 'oct') {
      this.labelField = "Insira o número em base 8";
    }
    if (this.selectedOption == 'dec') {
      this.labelField = "Insira o número em base 10";
    }
    if (this.selectedOption == 'hex') {
      this.labelField = "Insira o número em base 16";
    }
    this.textNumber = "";
  }


  convert() {
    if (this.textNumber){

      let loader = this.loadingCtrl.create({
        content: "Calculando..."
      });
      loader.present();

      this.results = new ResultNumbers();
      var n = this.textNumber;
      var decValue = null;
      if (this.selectedOption == 'bin') {
        decValue = this.numToDec(Number(n), 2);

        this.results.bin = Number(n);

        this.results.dec = decValue;
        this.results.oct = Number(this.decToBase(decValue, 8));
        this.results.hex = this.decToBase(decValue, 16);
      }

      if (this.selectedOption == 'oct') {
        decValue = this.numToDec(Number(n), 8);
        this.results.oct = Number(n);
        this.results.bin = Number(this.decToBase(decValue, 2));
        this.results.dec = decValue;
        this.results.hex = this.decToBase(decValue, 16);
      }

      if (this.selectedOption == 'hex') {
        decValue = this.numToDec(n, 16);
        this.results.hex = String(n).toUpperCase();
        this.results.bin = Number(this.decToBase(decValue, 2));
        this.results.oct = Number(this.decToBase(decValue, 8));
        this.results.dec = decValue;
      }

      if (this.selectedOption == 'dec') {
        var vdec = Number(n);
        this.results.bin = Number(this.decToBase(vdec, 2));
        this.results.oct = Number(this.decToBase(vdec, 8));
        this.results.dec = vdec;
        this.results.hex = this.decToBase(vdec, 16);
      }

      loader.dismiss();

    }else{
      //send alert message(toast)
      let toast = this.toastCtrl.create({
        message: 'Informe um número para ser convertido!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  decToBase(dec: number, base: number): string {

    var result: string = '';
    var current: number = Math.trunc(dec);

    if (base != 16) {
      while (current > 0) {
        result = result + (current % base);
        current = Math.trunc(current / base);
      }
    } else {// base 16

      while (current > 0) {
        result = result + (this.changeNumberByWord(current % base));
        current = Math.trunc(current / base);
      }
    }

    return result.split('').reverse().join('');
  }

  numToDec(n: any, base: number): number {
    var binNumber: string = String(n);
    var sum: number = 0;
    for (var index = 0; index < binNumber.length; index++) {
      let currentValue: number = 0;
      if (base == 16) {
        currentValue = this.changeWordByNumber(binNumber.charAt(index));
      } else {
        currentValue = Number(binNumber.charAt(index));
      }
      // calc expo
      let expo = currentValue * Math.pow(base, ((binNumber.length - 1) - index))
      // soma dos multiplos
      sum = sum + expo;
    }
    return sum;
  }

  changeWordByNumber(value: string): number {

    if (value == 'A' || value == 'a') {
      return 10;
    } else if (value == 'B' || value == 'b') {
      return 11;
    } else if (value == 'C' || value == 'c') {
      return 12;
    } else if (value == 'D' || value == 'd') {
      return 13;
    } else if (value == 'E' || value == 'e') {
      return 14;
    } else if (value == 'F' || value == 'f') {
      return 15;
    }

    return Number(value);

  }

  changeNumberByWord(value: number): string {
    if (value == 10) {
      return 'A';
    } else if (value == 11) {
      return 'B';
    } else if (value == 12) {
      return 'C';
    } else if (value == 13) {
      return 'D';
    } else if (value == 14) {
      return 'E';
    } else if (value == 15) {
      return 'F';
    } else {
      return String(value);
    }


  }

}

export class ResultNumbers {
  bin: number = 0;
  oct: number = 0;
  dec: number = 0;
  hex: string = '0';


}