import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivCadastroComponent } from "./componentes/div-cadastro/div-cadastro.component";
import { DivLoginComponent } from "./componentes/div-login/div-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DivCadastroComponent, DivLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro_login';
}
