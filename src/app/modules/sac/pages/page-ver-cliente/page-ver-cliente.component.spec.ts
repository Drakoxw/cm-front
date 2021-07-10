import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVerClienteComponent } from './page-ver-cliente.component';

describe('PageVerClienteComponent', () => {
  let component: PageVerClienteComponent;
  let fixture: ComponentFixture<PageVerClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVerClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVerClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
