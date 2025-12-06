import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    login(): void{
      localStorage.setItem('token','maria')
    }

    logout(): void{
      localStorage.removeItem('token')
    }
}
