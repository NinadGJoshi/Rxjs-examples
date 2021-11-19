import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapOperatorComponent } from './switchmap-operator.component';

describe('SwitchmapOperatorComponent', () => {
  let component: SwitchmapOperatorComponent;
  let fixture: ComponentFixture<SwitchmapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmapOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
