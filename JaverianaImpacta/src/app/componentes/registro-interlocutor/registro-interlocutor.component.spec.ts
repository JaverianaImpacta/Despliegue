import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInterlocutorComponent } from './registro-interlocutor.component';

describe('RegistroInterlocutorComponent', () => {
  let component: RegistroInterlocutorComponent;
  let fixture: ComponentFixture<RegistroInterlocutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroInterlocutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroInterlocutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
