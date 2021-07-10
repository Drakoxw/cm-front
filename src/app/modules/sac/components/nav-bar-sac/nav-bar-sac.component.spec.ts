import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSACComponent } from './nav-bar-sac.component';

describe('NavBarSACComponent', () => {
  let component: NavBarSACComponent;
  let fixture: ComponentFixture<NavBarSACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
