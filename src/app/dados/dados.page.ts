import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private pessoa;

  constructor() {
    this.pessoa = {
      nome: "Maria Eliza",
      idade: "18",
      email: "almeida.mariaeliza@gmail",
      telefone: "(14) 9 81581048",
    }
   }

  ngOnInit() {
  }

}
