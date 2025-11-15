import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
    numero: number = 10;

    incrementar():void{
      this.numero += 1;
    }

    decrementar():void{
      this.numero -= 1;
    }
}
