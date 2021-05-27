import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatbtnComponent } from './floatbtn.component';

describe('FloatbtnComponent', () => {
  let component: FloatbtnComponent;
  let fixture: ComponentFixture<FloatbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
