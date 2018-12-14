import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { identity } from 'rxjs';
import { Usuarios } from '../usuario/usuarios';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  title = 'Cadastrar Usuário';
  formCadastro;
  valoresForm;
  conversao;
  private _usuarios = new Usuarios();

  ngOnInit() {
    this.formCadastro = this.fb.group({
      id: identity,
      nome: ['', Validators.required],
      funcao: [''],
      empresa: [''],
      embarque: [''],
      desembarque: [''],
      embarcado: [false]
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        this.valoresForm = res;
      });
  }

  cadastro() {
    this._usuarios.adiciona(this.valoresForm);
    this.conversao = JSON.stringify(this.valoresForm);
    this.formCadastro.id = localStorage.length + 1;
    localStorage.setItem(this.formCadastro.id, this.conversao);
    alert('Usuário cadastrado. Matricula: ' + this.formCadastro.id);
   }
}
