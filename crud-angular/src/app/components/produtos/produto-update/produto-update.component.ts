import { produto } from './../modelo-do-produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  produto!: produto;
  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.lendoPeloId(id!).subscribe(produto => {
      this.produto = produto;
    })
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.mostreNoConsole('O produto foi alterado');
      this.router.navigate(['/produtos']);
    })
  }
  cancela(): void {
    this.router.navigate(['/produtos']);
  }
}
