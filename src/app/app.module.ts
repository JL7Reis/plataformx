import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EmbarqueComponent } from './embarque/embarque.component';
import { HeaderComponent } from './header/header.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaEmbarqueComponent } from './lista-embarque/lista-embarque.component';
import { FiltroEmbarqueComponent } from './filtro-embarque/filtro-embarque.component';

@NgModule({
  declarations: [AppComponent,
    HeaderComponent, HomeComponent, EmbarqueComponent,
    CadastroUsuarioComponent, ListaUsuarioComponent, ListaEmbarqueComponent, FiltroEmbarqueComponent
  ],
  imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: []
})
export class AppModule { }
