import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProg } from './nav-prog';

describe('NavProg', () => {
  let component: NavProg;
  let fixture: ComponentFixture<NavProg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavProg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
