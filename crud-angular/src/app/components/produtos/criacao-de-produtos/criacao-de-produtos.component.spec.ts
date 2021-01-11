import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoDeProdutosComponent } from './criacao-de-produtos.component';

describe('CriacaoDeProdutosComponent', () => {
  let component: CriacaoDeProdutosComponent;
  let fixture: ComponentFixture<CriacaoDeProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoDeProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
