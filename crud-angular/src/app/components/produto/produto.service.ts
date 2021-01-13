import { produto } from './../produtos/modelo-do-produto';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = 'http://localhost:3001/produtos'

  constructor( private snackBar: MatSnackBar, private http: HttpClient ) { }


  mostreNoConsole (msg: string): void{
    this.snackBar.open(msg,'x', {

      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }
  criando (produto: produto): Observable<produto>{

    return this.http.post<produto>(this.baseUrl, produto)

  }
  lendo(): Observable<produto[]>{
    return this.http.get<produto[]>(this.baseUrl)
  }
}
