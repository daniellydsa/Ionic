import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nome: String;
  inverso: String;

  inverter() {
    this.inverso = this.nome.split('').reverse().join('');
  }
  constructor() {}

}
