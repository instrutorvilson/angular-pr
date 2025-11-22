import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula2');
  
  mostrar: boolean = false
  exibirDetalhes: boolean = false
  textoButtonDetalhes: string = 'Exibir Detalhes'
  showProdutos: boolean = false

  produtos:string[] = ['Trigo','Arroz','Tv','celular']

  detalhes():void{
    this.exibirDetalhes = ! this.exibirDetalhes
    if(this.textoButtonDetalhes === 'Exibir Detalhes'){
        this.textoButtonDetalhes = 'Ocultar detalhes'
    }
    else{
       this.textoButtonDetalhes = 'Exibir detalhes'
    }
  }
}
