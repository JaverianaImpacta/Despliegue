import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProyectoComponent } from './landing-proyecto.component';

describe('LandingProyectoComponent', () => {
  let component: LandingProyectoComponent;
  let fixture: ComponentFixture<LandingProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingProyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
