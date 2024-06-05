import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEntidadComponent } from './detalles-entidad.component';

describe('DetallesEntidadComponent', () => {
  let component: DetallesEntidadComponent;
  let fixture: ComponentFixture<DetallesEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesEntidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
