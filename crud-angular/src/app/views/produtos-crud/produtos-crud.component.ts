import { CriacaoDeProdutosComponent } from './../../components/produtos/criacao-de-produtos/criacao-de-produtos.component';
import { produto } from './../../components/produtos/modelo-do-produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produtos-crud',
  templateUrl: './produtos-crud.component.html',
  styleUrls: ['./produtos-crud.component.css']
})
export class ProdutosCrudComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {}


  navegacaoCriandoComponente(): void {
      this.router.navigate(['/produtos/criacao-de-produtos'])
  } 


    
  
}
