// div-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-div-login',
  templateUrl: './div-login.component.html',
  styleUrls: ['./div-login.component.css']
})
export class DivLoginComponent {

  constructor(private router: Router) {}

  navegarParaCadastro() {
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/div-cadastro']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
