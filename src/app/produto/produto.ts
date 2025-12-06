import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {

  constructor(private router: Router){}
  
  verDetalhes(id:number){
     this.router.navigate(['/produto', id])
  }
}
