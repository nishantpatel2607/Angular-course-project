import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExampleComponent } from './view-child-example.component';

describe('ViewChildExampleComponent', () => {
  let component: ViewChildExampleComponent;
  let fixture: ComponentFixture<ViewChildExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
