import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

export class PromptAlert {

  constructor(public alertCtrl: AlertController) {}

  async presentAlertPrompt() {
    const alert= await this.alertCtrl.create({
      header:"Adicionar novo aluno!",
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder:'Nome'
        },
        {
          name: 'nota',
          type: 'text',
          placeholder:'Nota'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm ok');
            let lp = new ListaPage();
            lp.save();
          }
        }
      ]
    });
    await alert.present();
  }

}