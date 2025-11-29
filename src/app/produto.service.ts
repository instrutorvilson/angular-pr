import { Injectable } from '@angular/core';
import { IProduto } from './interfaces/IProduto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = 'http://localhost:3000/produtos'
  constructor(private http:HttpClient) { }
  
  salvar(produto:IProduto){    
     console.log(produto) 
     return this.http.post(this.url, produto)
  }

  getProdutos(){
    return this.http.get(this.url)
  }
}
