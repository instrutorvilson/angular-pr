import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IProduto {
  id?:number,
  descricao: string,
  preco: number,
  estoque: number
}

@Component({
  selector: 'app-produto',
  imports: [FormsModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
    produto:IProduto = {descricao:'',preco:0, estoque:0}

    
    
}
