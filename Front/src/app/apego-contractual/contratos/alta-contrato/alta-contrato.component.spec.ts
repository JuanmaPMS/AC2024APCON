import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaContratoComponent } from './alta-contrato.component';

describe('AltaContratoComponent', () => {
  let component: AltaContratoComponent;
  let fixture: ComponentFixture<AltaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
