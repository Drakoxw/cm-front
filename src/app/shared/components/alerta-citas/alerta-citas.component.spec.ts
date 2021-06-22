import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaCitasComponent } from './alerta-citas.component';

describe('AlertaCitasComponent', () => {
  let component: AlertaCitasComponent;
  let fixture: ComponentFixture<AlertaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
