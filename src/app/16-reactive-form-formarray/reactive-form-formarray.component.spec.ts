import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormarrayComponent } from './reactive-form-formarray.component';

describe('ReactiveFormFormarrayComponent', () => {
  let component: ReactiveFormFormarrayComponent;
  let fixture: ComponentFixture<ReactiveFormFormarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormFormarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
