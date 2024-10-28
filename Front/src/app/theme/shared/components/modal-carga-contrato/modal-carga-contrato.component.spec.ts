import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCargaContratoComponent } from './modal-carga-contrato.component';

describe('ModalCargaContratoComponent', () => {
  let component: ModalCargaContratoComponent;
  let fixture: ComponentFixture<ModalCargaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCargaContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCargaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
