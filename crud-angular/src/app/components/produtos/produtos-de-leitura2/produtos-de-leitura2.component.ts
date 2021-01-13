import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProdutosDeLeitura2DataSource, ProdutosDeLeitura2Item } from './produtos-de-leitura2-datasource';

@Component({
  selector: 'app-produtos-de-leitura2',
  templateUrl: './produtos-de-leitura2.component.html',
  styleUrls: ['./produtos-de-leitura2.component.css']
})
export class ProdutosDeLeitura2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProdutosDeLeitura2Item>;
  dataSource: ProdutosDeLeitura2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProdutosDeLeitura2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
