import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDeLeituraComponent } from './produtos-de-leitura.component';

describe('ProdutosDeLeituraComponent', () => {
  let component: ProdutosDeLeituraComponent;
  let fixture: ComponentFixture<ProdutosDeLeituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDeLeituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDeLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
