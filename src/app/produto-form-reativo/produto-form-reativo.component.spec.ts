import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormReativoComponent } from './produto-form-reativo.component';

describe('ProdutoFormReativoComponent', () => {
  let component: ProdutoFormReativoComponent;
  let fixture: ComponentFixture<ProdutoFormReativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFormReativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoFormReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
