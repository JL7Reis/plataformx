
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { EmbarqueComponent } from '../embarque/embarque.component';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'adduser', component: CadastroUsuarioComponent },
  { path: 'listuser', component: ListaUsuarioComponent },
  { path: 'embarque', component: EmbarqueComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }