import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  title = 'Lista de Usuarios';

  headElements;
  array: any = [];
  order;

  constructor() { }

  ngOnInit() {

    this.headElements = ['ID', 'Nome', 'Função', 'Empresa'];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage[key]);
      Object.assign(value, {
        id: key
      });
      this.array.push(value);
    }
    this.array.sort((a, b) => a.id.localeCompare(b.id));
    console.log(this.array.sort((a, b) => a.id.localeCompare(b.id)));
  }

  public get sortedArray(): any[] {
    return this.array.sort.id;
  }
}
