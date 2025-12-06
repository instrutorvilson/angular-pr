import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './auth-guard';
import { Produto } from './produto/produto';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';

export const routes: Routes = [
    { path: "dashboard", component: Dashboard, canActivate:[authGuard] },
    { path: "produtos", component: Produto },
    { path: "produto/:id", component: DetalheProduto },
    { path: "login", component: Login },
    { path: "home", component: Home }
];
