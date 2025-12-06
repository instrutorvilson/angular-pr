import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: "dashboard", component: Dashboard, canActivate:[authGuard] },
    { path: "login", component: Login },
    { path: "home", component: Home }
];
