import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService implements OnInit {

  constructor() { }

  private _usuarios: Usuario[];

  ngOnInit() { }

  getUsers(): Observable<Usuario[]>  {
    return;
  }

  getUserById(id: number) {
    return;
  }

  createUser(user: Usuario) {
    return;
  }
}
