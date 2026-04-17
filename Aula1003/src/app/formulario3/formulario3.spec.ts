import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario3 } from './formulario3';

describe('Formulario3', () => {
  let component: Formulario3;
  let fixture: ComponentFixture<Formulario3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//oi