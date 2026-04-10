import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario2 } from './formulario2';

describe('Formulario2', () => {
  let component: Formulario2;
  let fixture: ComponentFixture<Formulario2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
