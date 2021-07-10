import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSACComponent } from './page-sac.component';

describe('PageSACComponent', () => {
  let component: PageSACComponent;
  let fixture: ComponentFixture<PageSACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
