import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivCadastroComponent } from './div-cadastro.component';

describe('DivCadastroComponent', () => {
  let component: DivCadastroComponent;
  let fixture: ComponentFixture<DivCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
