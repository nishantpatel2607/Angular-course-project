import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTestComponent } from './environment-test.component';

describe('EnvironmentTestComponent', () => {
  let component: EnvironmentTestComponent;
  let fixture: ComponentFixture<EnvironmentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
