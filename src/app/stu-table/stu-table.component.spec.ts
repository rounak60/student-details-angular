import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuTableComponent } from './stu-table.component';

describe('StuTableComponent', () => {
  let component: StuTableComponent;
  let fixture: ComponentFixture<StuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
