// div-cadastro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-div-cadastro',
  templateUrl: './div-cadastro.component.html',
  styleUrls: ['./div-cadastro.component.css']
})
export class DivCadastroComponent {
  constructor(private router: Router) {}

  navegarParaLogin() {
    console.log("Navegando para a tela de login");
    this.router.navigate(['/div-login']).then(success => {
      if (success) {
        console.log('Navegação bem-sucedida');
      } else {
        console.log('Falha na navegação');
      }
    });
  }
}
