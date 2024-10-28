import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaContratoComponent } from './carga-contrato.component';

describe('CargaContratoComponent', () => {
  let component: CargaContratoComponent;
  let fixture: ComponentFixture<CargaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
