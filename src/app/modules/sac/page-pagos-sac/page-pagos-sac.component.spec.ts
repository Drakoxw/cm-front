import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagosSACComponent } from './page-pagos-sac.component';

describe('PagePagosSACComponent', () => {
  let component: PagePagosSACComponent;
  let fixture: ComponentFixture<PagePagosSACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePagosSACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePagosSACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
