import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionContratoComponent } from './modificacion-contrato.component';

describe('ModificacionContratoComponent', () => {
  let component: ModificacionContratoComponent;
  let fixture: ComponentFixture<ModificacionContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificacionContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
