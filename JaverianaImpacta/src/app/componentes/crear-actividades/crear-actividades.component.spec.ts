import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActividadesComponent } from './crear-actividades.component';

describe('CrearActividadesComponent', () => {
  let component: CrearActividadesComponent;
  let fixture: ComponentFixture<CrearActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
