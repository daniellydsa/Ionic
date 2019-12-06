import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})

export class ListaPage implements OnInit {
  alunos: Array <Aluno>= [{nome:"Danielly", nota:10}, {nome:"Diogo", nota:10}];
  a = new Aluno();
  save() {
    this.alunos.push({nome:this.a.nome, nota:this.a.nota});
  }
  remove(i) {
    this.alunos.splice(i,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
export class Aluno {
  nome: string;
  nota: number;
}