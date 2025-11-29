import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduto } from '../interfaces/IProduto';
import { ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [FormsModule, CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produto:IProduto = {descricao:'',preco:0, unMedida: 'LT',estoque:0}
  
  produtos:any
  mensagem = ""
  constructor(private prod_service: ProdutoService){}

  salvar():void{
    this.prod_service.salvar(this.produto).subscribe(response => this.mensagem = "Produto cadastrado com sucesso")
    this.prod_service.getProdutos().subscribe(data => this.produtos = data)
  } 
}
