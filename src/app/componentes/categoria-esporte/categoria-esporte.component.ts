import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria-esporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-esporte.component.html',
  styleUrl: './categoria-esporte.component.css'
})

export class CategoriaEsporteComponent {
  categorias = [
    { nome: 'Futebol', imagem: 'images/futebol.png' },
    { nome: 'Basquete', imagem: 'images/basquete.png' },
    { nome: 'Ciclismo', imagem: 'images/ciclismo.png' },
    { nome: 'Natação', imagem: 'images/natacao.png' },
    { nome: 'Dança', imagem: 'images/danca.png' },
    { nome: 'Corrida', imagem: 'images/corrida.png' },
    { nome: 'Vôlei', imagem: 'images/volei.png' },
    { nome: 'Surf', imagem: 'images/surf.png' },
  ];
}
