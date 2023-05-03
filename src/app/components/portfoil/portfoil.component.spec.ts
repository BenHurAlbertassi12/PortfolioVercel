import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoilComponent } from './portfoil.component';

describe('PortfoilComponent', () => {
  let component: PortfoilComponent;
  let fixture: ComponentFixture<PortfoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
