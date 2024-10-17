import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Import necessário para o ngFor
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Corrigido o nome do arquivo
import { DivCadastroComponent } from './componentes/div-cadastro/div-cadastro.component';
import { DivLoginComponent } from './componentes/div-login/div-login.component';

@NgModule({
  declarations: [
    DivCadastroComponent,
    DivLoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DivCadastroComponent]
})
export class AppModule { }
