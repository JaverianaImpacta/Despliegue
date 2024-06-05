import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadPostuladaComponent } from './entidad-postulada.component';

describe('EntidadPostuladaComponent', () => {
  let component: EntidadPostuladaComponent;
  let fixture: ComponentFixture<EntidadPostuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadPostuladaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntidadPostuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
