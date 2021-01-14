import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../produto/produto.service';
import { produto } from './../modelo-do-produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-deletar',
  templateUrl: './produtos-deletar.component.html',
  styleUrls: ['./produtos-deletar.component.css']
})
export class ProdutosDeletarComponent implements OnInit {
  produto!: produto
  
  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.lendoPeloId(id!).subscribe(produto => {
      this.produto = produto
    })
  }
  deletaProduto(): void {
    this.produtoService.deleta(this.produto.id!).subscribe(() =>  {
      this.produtoService.mostreNoConsole('Excluido com sucesso!');
      this.router.navigate(['/produtos'])
    })
   
  }
  cancela(): void {
    this.router.navigate(['/produtos'])
  } 


}
