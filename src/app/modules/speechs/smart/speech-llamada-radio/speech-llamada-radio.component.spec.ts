import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechLlamadaRadioComponent } from './speech-llamada-radio.component';

describe('SpeechLlamadaRadioComponent', () => {
  let component: SpeechLlamadaRadioComponent;
  let fixture: ComponentFixture<SpeechLlamadaRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechLlamadaRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechLlamadaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
