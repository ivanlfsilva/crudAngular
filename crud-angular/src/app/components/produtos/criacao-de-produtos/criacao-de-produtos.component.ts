import { ProdutoService } from './../../produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-de-produtos',
  templateUrl: './criacao-de-produtos.component.html',
  styleUrls: ['./criacao-de-produtos.component.css']
})
export class CriacaoDeProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.mostreNoConsole('operação realizada com sucesso!')
  }

}
