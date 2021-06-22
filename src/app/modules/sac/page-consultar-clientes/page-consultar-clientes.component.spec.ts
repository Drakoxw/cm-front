import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultarClientesComponent } from './page-consultar-clientes.component';

describe('PageConsultarClientesComponent', () => {
  let component: PageConsultarClientesComponent;
  let fixture: ComponentFixture<PageConsultarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConsultarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConsultarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
