import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  users: Usuario[];

  constructor(private router: Router) { }

  usuarios: Usuario[];

  ngOnInit() {
  //  this.usuarioService.getUsers()
  //    .subscribe( data => {
  //      this.users = data;
  //    });
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

}
