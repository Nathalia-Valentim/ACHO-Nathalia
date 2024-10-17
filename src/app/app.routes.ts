import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivCadastroComponent } from './componentes/div-cadastro/div-cadastro.component';
import { DivLoginComponent } from './componentes/div-login/div-login.component';
import { CategoriaEsporteComponent } from './componentes/categoria-esporte/categoria-esporte.component';

export const routes: Routes = [
  { path: 'div-cadastro', component: DivCadastroComponent },
  { path: 'div-login', component: DivLoginComponent },
  { path: 'categoria-esporte', component: CategoriaEsporteComponent },
  { path: '', redirectTo: '/div-cadastro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }