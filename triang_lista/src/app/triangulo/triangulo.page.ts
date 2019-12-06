import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
})
export class TrianguloPage implements OnInit {
  base: number;
  altura: number;
  resultado: number;

  calcula() {
    this.resultado = (this.base * this.altura) / 2;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
