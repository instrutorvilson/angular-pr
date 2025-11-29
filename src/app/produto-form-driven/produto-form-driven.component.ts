import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduto } from '../interfaces/IProduto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-form-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './produto-form-driven.component.html',
  styleUrl: './produto-form-driven.component.css'
})
export class ProdutoFormDrivenComponent {

  salvar(prod:any):void{
      console.log(prod.value)
  }
}
