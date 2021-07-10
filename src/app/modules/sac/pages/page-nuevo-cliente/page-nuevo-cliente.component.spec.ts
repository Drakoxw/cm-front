import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNuevoClienteComponent } from './page-nuevo-cliente.component';

describe('PageNuevoClienteComponent', () => {
  let component: PageNuevoClienteComponent;
  let fixture: ComponentFixture<PageNuevoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNuevoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
