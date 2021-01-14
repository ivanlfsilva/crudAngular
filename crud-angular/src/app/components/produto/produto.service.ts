import { map, catchError } from 'rxjs/operators';
import { produto } from './../produtos/modelo-do-produto';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = 'http://localhost:3001/produtos'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  mostreNoConsole(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {

      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-erro'] : ['msg-success']

    })
  }
  criando(produto: produto): Observable<produto> {
    return this.http.post<produto>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e) ))
      }
      errorHandler(e: any): Observable<any> {
        this.mostreNoConsole('error!', true)
        return EMPTY;
      }
      
  lendo(): Observable<produto[]> {
    return this.http.get<produto[]>(this.baseUrl).pipe(map(obj => obj))
  }
  lendoPeloId(id: string): Observable<produto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<produto>(url);
  }
  update(produto: produto): Observable<produto> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<produto>(url, produto);
  }
  deleta(id: number): Observable<produto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<produto>(url);
  }
}
