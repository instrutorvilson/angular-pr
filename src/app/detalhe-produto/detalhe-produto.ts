import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  imports: [],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css',
})
export class DetalheProduto implements OnInit{
     constructor(private route: ActivatedRoute){}
     
     idproduto:any = 0
     
     ngOnInit(): void {
        this.idproduto =  this.route.snapshot.paramMap.get('id') 
      }

   
}
