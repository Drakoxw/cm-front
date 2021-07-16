import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoSpeechsComponent } from './marco-speechs.component';

describe('MarcoSpeechsComponent', () => {
  let component: MarcoSpeechsComponent;
  let fixture: ComponentFixture<MarcoSpeechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoSpeechsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoSpeechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
