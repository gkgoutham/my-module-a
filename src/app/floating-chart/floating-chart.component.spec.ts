import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingChartComponent } from './floating-chart.component';

describe('FloatingChartComponent', () => {
  let component: FloatingChartComponent;
  let fixture: ComponentFixture<FloatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
