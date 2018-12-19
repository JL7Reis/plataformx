import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-embarque',
  templateUrl: './lista-embarque.component.html',
  styleUrls: ['./lista-embarque.component.css']
})
export class ListaEmbarqueComponent implements OnInit {

  title = 'Horários de Embarque e Desembarque';

  headElements;
  array: any = [];
  order;

  constructor() { }

  ngOnInit() {

    this.headElements = ['ID', 'Nome', 'Embarque', 'Desembarque'];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage[key]);
      Object.assign(value, {
        id: key
      });
      this.array.push(value);
    }
    this.array.sort((a, b) => a.id.localeCompare(b.id));
  }

  public get sortedArray(): any[] {
    return this.array.sort.id;
  }

}
