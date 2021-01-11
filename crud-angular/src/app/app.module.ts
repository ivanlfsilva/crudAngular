import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { NavegacaoComponent } from './components/template/navegacao/navegacao.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';
import { CriacaoDeProdutosComponent } from './components/produtos/criacao-de-produtos/criacao-de-produtos.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RodapeComponent,
    NavegacaoComponent,
    HomeComponent,
    ProdutosCrudComponent,
    CriacaoDeProdutosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

