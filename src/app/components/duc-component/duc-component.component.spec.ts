import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucComponentComponent } from './duc-component.component';

describe('DucComponentComponent', () => {
  let component: DucComponentComponent;
  let fixture: ComponentFixture<DucComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DucComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
