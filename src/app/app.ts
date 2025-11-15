import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Rodape } from './rodape/rodape';
import { Contador } from "./contador/contador";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Rodape, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula1');
  nome: string = 'Ana da Silva'
  idade: number = 18

}
