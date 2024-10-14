import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEsporteComponent } from './categoria-esporte.component';

describe('CategoriaEsporteComponent', () => {
  let component: CategoriaEsporteComponent;
  let fixture: ComponentFixture<CategoriaEsporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaEsporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEsporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
