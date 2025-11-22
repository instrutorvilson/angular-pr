import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduto } from '../interfaces/IProduto';
import { ProdutoService } from '../produtoService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [FormsModule,CommonModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produto:IProduto = {descricao:'',preco:0, unMedida: 'LT',estoque:0}
  
  produtos:IProduto[] = []

   constructor(private prod_service: ProdutoService){}

  salvar():void{
    this.prod_service.salvar(this.produto)
    this.produtos = this.prod_service.getProdutos()
  }  

}
