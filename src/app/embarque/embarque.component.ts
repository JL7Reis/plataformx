import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { identity } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-embarque',
  templateUrl: './embarque.component.html',
  styleUrls: ['./embarque.component.css']
})
export class EmbarqueComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  title = 'Embarque e Desembarque';
  formEmbarque;
  valoresForm;
  conversao;
  userArray;
  embarcado;
  matricula;
  jparse;
  jstringify;
  embarq;

  ngOnInit() {
    this.formEmbarque = this.fb.group({
      id: identity,
      nome: [''],
      funcao: [''],
      empresa: [''],
      embarque: [''],
      desembarque: [''],
      embarcado: [false]
    });

    this.formEmbarque.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        this.valoresForm = res;
      });
  }

  embarque() {
    if ($('#matriculaid').val() == null) {
      alert('Informe a matricula!');
    } else {
      this.matricula = $('#matriculaid').val();
      this.userArray = localStorage.getItem(this.matricula);
      this.jparse = JSON.parse(this.userArray);
      this.embarq = this.jparse.embarcado = true;
      this.embarq = this.jparse.embarque = $('#embarqueid').val();
      this.jstringify = JSON.stringify(this.jparse);
      localStorage.setItem(this.matricula, this.jstringify);
      alert('Embarque realizado!');
    }
  }

  desembarque() {
    if ($('#matriculaid').val() == null) {
      alert('Informe a matricula!');
    } else {
      this.matricula = $('#matriculaid').val();
      this.userArray = localStorage.getItem(this.matricula);
      this.jparse = JSON.parse(this.userArray);
      this.embarq = this.jparse.embarcado = false;
      this.embarq = this.jparse.desembarque = $('#desembarqueid').val();
      this.jstringify = JSON.stringify(this.jparse);
      localStorage.setItem(this.matricula, this.jstringify);
      alert('Desembarque realizado!');
    }
  }

  selectid() {
    this.matricula = $('#matriculaid').val();
    this.userArray = localStorage.getItem(this.matricula);
    this.jparse = JSON.parse(this.userArray);
    if (this.jparse == null) {
      $('#nomeid').val('Matricula não existe.');
    } else {
      $('#nomeid').val(this.jparse.nome);
    }
    if (this.jparse.embarcado === false) {
      $('#desembarqueid').off();
    }
  }
}
