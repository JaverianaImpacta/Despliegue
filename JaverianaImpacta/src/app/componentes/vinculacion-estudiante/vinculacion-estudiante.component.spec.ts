import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionEstudianteComponent } from './vinculacion-estudiante.component';

describe('VinculacionEstudianteComponent', () => {
  let component: VinculacionEstudianteComponent;
  let fixture: ComponentFixture<VinculacionEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinculacionEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinculacionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
