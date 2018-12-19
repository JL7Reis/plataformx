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
  embarcado;
  matricula;
  jparse;
  jstringify;
  embarq;
  embarqueEdit: boolean = false;
  desembarqueEdit: boolean = false;

  ngOnInit() {

    setInterval(() => { this.formEmbarque++; });

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
    this.matricula = $('#matriculaid').val();
    this.jparse = JSON.parse(localStorage.getItem(this.matricula));
    if (this.jparse == null) {
      alert('Informe a matricula!');
    } else {
      this.embarq = this.jparse.embarcado = true;
      this.embarq = this.jparse.embarque = $('#embarqueid').val();
      if (this.embarq === '') {
        alert('Informe a data de embarque!');
      } else {
        this.jstringify = JSON.stringify(this.jparse);
        localStorage.setItem(this.matricula, this.jstringify);
        alert('Embarque realizado!');
      }
    }
  }

  desembarque() {
    this.matricula = $('#matriculaid').val();
    this.jparse = JSON.parse(localStorage.getItem(this.matricula));
    if (this.jparse == null) {
      alert('Informe a matricula!');
    } else {
      this.embarq = this.jparse.embarcado = false;
      this.embarq = this.jparse.desembarque = $('#desembarqueid').val();
      if (this.embarq === '') {
        alert('Informe a data de desembarque!');
      } else {
        this.jstringify = JSON.stringify(this.jparse);
        localStorage.setItem(this.matricula, this.jstringify);
        alert('Desembarque realizado!');
      }
    }
  }

  selectid() {
    this.matricula = $('#matriculaid').val();
    this.jparse = JSON.parse(localStorage.getItem(this.matricula));
    if (this.jparse == null) {
      $('#nomeid').val('Matricula não existe.');
    } else {
      $('#nomeid').val(this.jparse.nome);
      $('#embarqueid').val(this.jparse.embarque);
      $('#desembarqueid').val(this.jparse.desembarque);
      if (this.jparse.embarcado === true) {
        this.embarqueEdit = true;
        this.desembarqueEdit = false;
      } else {
        this.desembarqueEdit = true;
        this.embarqueEdit = false;
      }
    }
  }
}
