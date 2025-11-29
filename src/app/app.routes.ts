import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormDrivenComponent } from './produto-form-driven/produto-form-driven.component';
import { ProdutoFormReativoComponent } from './produto-form-reativo/produto-form-reativo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "produtos-form", component: ProdutoComponent },
    { path: "produtos-form-driven", component: ProdutoFormDrivenComponent },
    { path: "produtos-form-reativo", component: ProdutoFormReativoComponent },
    { path: "home", component: HomeComponent }
];
