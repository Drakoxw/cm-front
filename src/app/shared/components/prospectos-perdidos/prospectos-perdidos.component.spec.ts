import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectosPerdidosComponent } from './prospectos-perdidos.component';

describe('ProspectosPerdidosComponent', () => {
  let component: ProspectosPerdidosComponent;
  let fixture: ComponentFixture<ProspectosPerdidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectosPerdidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectosPerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
