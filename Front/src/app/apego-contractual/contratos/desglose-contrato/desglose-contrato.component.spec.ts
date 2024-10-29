import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgloseContratoComponent } from './desglose-contrato.component';

describe('DesgloseContratoComponent', () => {
  let component: DesgloseContratoComponent;
  let fixture: ComponentFixture<DesgloseContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesgloseContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesgloseContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
