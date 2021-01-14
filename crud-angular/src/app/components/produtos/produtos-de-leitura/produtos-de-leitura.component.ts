import { produto } from './../modelo-do-produto';
import { ProdutoService } from './../../produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-de-leitura',
  templateUrl: './produtos-de-leitura.component.html',
  styleUrls: ['./produtos-de-leitura.component.css']
})
export class ProdutosDeLeituraComponent implements OnInit {
  
  produtos: produto[] = []; 
  displayedColumns = ['id','name','price','action'];
  
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  this.produtoService.lendo().subscribe(produtos => {
    this.produtos = produtos
    console.log(produtos)
  })
  }

}
