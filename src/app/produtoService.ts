import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from './interfaces/IProduto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos:IProduto[] = []

  salvar(produto:IProduto){
     const clone = {...produto} //spread
     clone.id = this.produtos.length + 1
     this.produtos.push(clone)
     return clone 
  }

  getProdutos(){
    return this.produtos
  }
}
