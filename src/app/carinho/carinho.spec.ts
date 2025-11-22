import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carinho } from './carinho';

describe('Carinho', () => {
  let component: Carinho;
  let fixture: ComponentFixture<Carinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carinho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carinho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
