import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduto } from '../interfaces/IProduto';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './produto-form-driven.component.html',
  styleUrl: './produto-form-driven.component.css'
})
export class ProdutoFormDrivenComponent  {
  mensagem:string = ''

  constructor(private prod_service: ProdutoService){}
  
  salvar(prod:any):void{
      this.prod_service.salvar(prod.value).subscribe(() => this.mensagem = 'Produto inserido!')
  }
}
