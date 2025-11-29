import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormDrivenComponent } from './produto-form-driven/produto-form-driven.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoComponent, ProdutoFormDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula3';
}
