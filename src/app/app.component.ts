import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivCadastroComponent } from "./componentes/div-cadastro/div-cadastro.component";
import { DivLoginComponent } from "./componentes/div-login/div-login.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DivCadastroComponent, DivLoginComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'cadastro_login';
}