import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCompletaComponent } from './nav-completa.component';

describe('NavCompletaComponent', () => {
  let component: NavCompletaComponent;
  let fixture: ComponentFixture<NavCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
