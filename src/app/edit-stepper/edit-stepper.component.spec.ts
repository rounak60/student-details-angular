import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStepperComponent } from './edit-stepper.component';

describe('EditStepperComponent', () => {
  let component: EditStepperComponent;
  let fixture: ComponentFixture<EditStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
