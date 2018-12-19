import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-filtro-embarque',
  templateUrl: './filtro-embarque.component.html',
  styleUrls: ['./filtro-embarque.component.css']
})
export class FiltroEmbarqueComponent {

  title = 'Filtro por periodo de embarque';

  headElements;
  array: any = [];
  ini;
  fim;
  mensagem;
  quantitativo;
  qtdfuncionario;
  resultado;

  constructor() { }

  public filtrar() {
    this.array = [];

    this.qtdfuncionario = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage[key]);
      Object.assign(value, { id: key });

      this.array.sort((ie, fe) => ie.embarque.localeCompare(fe.embarque));
      this.ini = $('#embarqueini').val();
      this.fim = $('#embarquefim').val();
      if (value.embarque >= this.ini && value.embarque <= this.fim) {
        this.array.push(value);
        this.qtdfuncionario++;
      }
    }

    if (this.qtdfuncionario === 0) {
      this.mensagem = 'Não foi realizado embarque nesse período.';
      this.qtdfuncionario = '';
    } else {
      this.mensagem = 'Quantidade de funcionarios embarcados nesse periodo: ';
      this.headElements = ['ID', 'Nome', 'Embarque', 'Desembarque'];
    }

    this.resultado = this.qtdfuncionario / localStorage.length;
    if (this.resultado === 1) {
      this.quantitativo = 'Todos os funcionários embarcaram nesse período.';
    } else {
      if (this.resultado === 0) {
        this.quantitativo = '';
      } else {
        if (this.resultado > 0.51) {
          this.quantitativo = 'A maioria dos funcionários embarcaram nesse período.';
        } else {
          if (this.resultado < 0.5) {
            this.quantitativo = 'A maioria dos funcionários NÃO embarcaram nesse período.';
          }
        }
      }
    }

  }

  public get sortedArray(): any[] {
    return this.array.sort.embarque;
  }

}
