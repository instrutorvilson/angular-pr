import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IProduto {
  id?:number,
  descricao: string,
  unMedida: string,
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
  produto:IProduto = {descricao:'',preco:0, unMedida: 'LT',estoque:0}

  salvar():void{
    console.log(this.produto)
  }
}
