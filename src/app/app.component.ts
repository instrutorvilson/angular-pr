import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormDrivenComponent } from './produto-form-driven/produto-form-driven.component';
import { ProdutoFormReativoComponent } from './produto-form-reativo/produto-form-reativo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ProdutoComponent, ProdutoFormDrivenComponent, ProdutoFormReativoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula3';
}
