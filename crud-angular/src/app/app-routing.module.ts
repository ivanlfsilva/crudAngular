import { produto } from './components/produtos/modelo-do-produto';
import { CriacaoDeProdutosComponent } from './components/produtos/criacao-de-produtos/criacao-de-produtos.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component'
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutosDeletarComponent } from './components/produtos/produtos-deletar/produtos-deletar.component';
const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },{
    path: "produtos",
    component: ProdutosCrudComponent,
  },{
    path: "produtos/criacao-de-produtos",
    component: CriacaoDeProdutosComponent,
  },{
    path: "produtos/produto-update/:id",
    component: ProdutoUpdateComponent,
  },{
    path: "produtos/produto-deletar/:id",
    component: ProdutosDeletarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
