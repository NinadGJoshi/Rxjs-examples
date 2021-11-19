import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalExampleComponent } from './interval-example.component';

describe('IntervalExampleComponent', () => {
  let component: IntervalExampleComponent;
  let fixture: ComponentFixture<IntervalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
