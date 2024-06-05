import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingActividadesComponent } from './landing-actividades.component';

describe('LandingActividadesComponent', () => {
  let component: LandingActividadesComponent;
  let fixture: ComponentFixture<LandingActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
