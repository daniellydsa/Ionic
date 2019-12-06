import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: number;
  altura: number;
  resultado: number;
  class: String;
  imc: String;

  calcula() {
    this.resultado = this.peso / Math.pow(this.altura,2);
    if (this.resultado < 17) {
      this.class = "Muito abaixo do peso";
    } else {
      if (this.resultado < 18.5) {
        this.class = "Abaixo do peso";
      } else {
        if (this.resultado < 25) {
          this.class = "Peso normal";
        } else {
          if (this.resultado < 30) {
            this.class = "Acima do peso";
          } else {
            if (this.resultado < 35) {
              this.class = "Obesidade I";
            } else {
              if (this.resultado < 40) {
                this.class = "Obesidade II (severa)";
              } else {
                this.class = "Obesidade III (mórbida)";
              }
            }
          }
        }
      }
    }
    this.imc = "Seu IMC: " + this.resultado.toFixed(2) + "  " + this.class;
  }
  constructor() {}

}
