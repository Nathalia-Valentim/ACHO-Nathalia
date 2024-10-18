import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { NavCompletaComponent } from "./componentes/nav-completa/nav-completa.component";
import { CategoriaEsporteComponent } from "./componentes/categoria-esporte/categoria-esporte.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { QuizComponent } from "./componentes/quiz/quiz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavCompletaComponent, CategoriaEsporteComponent, FooterComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro_login';
}
