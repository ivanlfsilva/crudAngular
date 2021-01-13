import { produto } from './../modelo-do-produto';
import { ProdutoService } from './../../produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-criacao-de-produtos',
  templateUrl: './criacao-de-produtos.component.html',
  styleUrls: ['./criacao-de-produtos.component.css']
})
export class CriacaoDeProdutosComponent implements OnInit {

  produto: produto = {
    name: '',
    price: null
  }

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {

  }
  criarProduto(): void {
      this.produtoService.criando(this.produto).subscribe(() => {
      this.produtoService.mostreNoConsole('produto criado!')
      this.router.navigate(['/produtos'])
    })


  }
  cancela(): void {
    this.router.navigate(['/produtos'])
  }
}
