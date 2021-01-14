import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDeletarComponent } from './produtos-deletar.component';

describe('ProdutosDeletarComponent', () => {
  let component: ProdutosDeletarComponent;
  let fixture: ComponentFixture<ProdutosDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
