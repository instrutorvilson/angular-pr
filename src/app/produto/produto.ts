import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  imports: [FormsModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
    descricao: string = 'milho'
}
