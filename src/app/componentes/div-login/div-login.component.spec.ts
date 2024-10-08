import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivLoginComponent } from './div-login.component';

describe('DivLoginComponent', () => {
  let component: DivLoginComponent;
  let fixture: ComponentFixture<DivLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
