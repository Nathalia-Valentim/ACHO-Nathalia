import { Component } from '@angular/core';
import { NavCompletaComponent } from "../nav-completa/nav-completa.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NavCompletaComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
