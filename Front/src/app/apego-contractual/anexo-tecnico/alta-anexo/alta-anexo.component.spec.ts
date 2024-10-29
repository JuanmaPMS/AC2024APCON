import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAnexoComponent } from './alta-anexo.component';

describe('AltaAnexoComponent', () => {
  let component: AltaAnexoComponent;
  let fixture: ComponentFixture<AltaAnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaAnexoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaAnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
