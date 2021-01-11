import { CriacaoDeProdutosComponent } from './components/produtos/criacao-de-produtos/criacao-de-produtos.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
