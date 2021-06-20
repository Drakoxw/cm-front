import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupervisorComponent } from './page-supervisor.component';

describe('PageSupervisorComponent', () => {
  let component: PageSupervisorComponent;
  let fixture: ComponentFixture<PageSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
