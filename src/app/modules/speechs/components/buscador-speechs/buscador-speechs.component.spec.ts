import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorSpeechsComponent } from './buscador-speechs.component';

describe('BuscadorSpeechsComponent', () => {
  let component: BuscadorSpeechsComponent;
  let fixture: ComponentFixture<BuscadorSpeechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorSpeechsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorSpeechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
