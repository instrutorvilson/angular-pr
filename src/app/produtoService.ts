import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from './interfaces/IProduto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos:IProduto[] = []

  salvar(produto:IProduto){
     produto.id = this.produtos.length + 1
     this.produtos.push(produto)
     return produto 
  }

  getProdutos(){
    return this.produtos
  }
}
