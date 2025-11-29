import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { IProduto } from '../interfaces/IProduto';

@Component({
  selector: 'app-produto-form-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form-reativo.component.html',
  styleUrl: './produto-form-reativo.component.css'
})
export class ProdutoFormReativoComponent {
     cadastro = new FormGroup({
       descricao: new FormControl('', Validators.required),
       preco: new FormControl(0, Validators.required),
       estoque: new FormControl(0, Validators.required),
       unMedida: new FormControl('', Validators.required),
     })

     mensagem:string = ''
     constructor(private prod_service: ProdutoService){}

     salvar(){       
      const obj:IProduto = 
      {
        descricao: this.cadastro.value.descricao,
        estoque:this.cadastro.value.estoque,
        preco:this.cadastro.value.preco,
        unMedida:this.cadastro.value.unMedida
      } 
      this.prod_service.salvar(obj).subscribe(() => this.mensagem = 'Produto inserido!')
     }
}
