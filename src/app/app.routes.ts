import { Routes } from '@angular/router';
import { Produto } from './produto/produto';
import { Cliente } from './cliente/cliente';
import { Carinho } from './carinho/carinho';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
    { path: "produtos", component: Produto },
    { path: "clientes", component: Cliente },
    { path: "carrinho", component: Carinho },
    { path: "home", component: Home }
];
