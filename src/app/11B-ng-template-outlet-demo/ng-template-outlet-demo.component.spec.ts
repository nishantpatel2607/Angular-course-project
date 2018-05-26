import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletDemoComponent } from './ng-template-outlet-demo.component';

describe('NgTemplateOutletDemoComponent', () => {
  let component: NgTemplateOutletDemoComponent;
  let fixture: ComponentFixture<NgTemplateOutletDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateOutletDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateOutletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
