import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRanaReneComponent } from './page-rana-rene.component';

describe('PageRanaReneComponent', () => {
  let component: PageRanaReneComponent;
  let fixture: ComponentFixture<PageRanaReneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRanaReneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRanaReneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
