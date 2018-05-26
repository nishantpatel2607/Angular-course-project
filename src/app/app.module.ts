import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { LifeCycleParentComponent } from './20-life-cycle-parent/life-cycle-parent.component';
import { TestParamGuard } from './testParamGuard.service';
import { HttpModule } from '@angular/http';
import { MathService } from './math.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassBindingComponent } from './01-class-binding/class-binding.component';
import { StyleBindingComponent } from './02-style-binding/style-binding.component';
import { EventBindingComponent } from './03-event-binding/event-binding.component';
import { TemplateVariableComponent } from './04-template-variable/template-variable.component';
import { TwoWayBindingComponent } from './05-two-way-binding/two-way-binding.component';
import { InputOutputPropertiesComponent } from './06-input-output-properties/input-output-properties.component';
import { ChildComponentComponent } from './06-child-component/child-component.component';
import { ChildComponent2Component } from './06-child-component2/child-component2.component';
import { ViewChildExampleComponent } from './07-view-child-example/view-child-example.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { NgIfDirectiveComponent } from './08-ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './09-ng-for-directive/ng-for-directive.component';
import { NgContentDirectiveComponent } from './10-ng-content-directive/ng-content-directive.component';
import { NgSwitchDirectiveComponent } from './11-ng-switch-directive/ng-switch-directive.component';
import { InputFormatDirective } from './input-format.directive';
import { SummaryPipePipe } from './summary-pipe.pipe';
import { CustomDirectiveComponent } from './12-custom-directive/custom-directive.component';
import { CustomPipeComponent } from './13-custom-pipe/custom-pipe.component';
import { TemplateFormComponent } from './14-template-form/template-form.component';
import { ReactiveFormComponent } from './15-reactive-form/reactive-form.component';
import { ReactiveFormFormarrayComponent } from './16-reactive-form-formarray/reactive-form-formarray.component';
import { MathComponent } from './17-math/math.component';
import { ProductsComponent } from './18-products/products.component';
import { ProductsService } from './18-products/products.service';
import { NavigationComponent } from './19-navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { TestParamsComponent } from './test-params/test-params.component';
import { QueryParametersComponent } from './query-parameters/query-parameters.component';
import { HomeComponent } from './home/home.component';
import { NgTemplateDemoComponent } from './11A-ng-template-demo/ng-template-demo.component';
import { NgTemplateOutletDemoComponent } from './11B-ng-template-outlet-demo/ng-template-outlet-demo.component';
import { EnvironmentTestComponent } from './environment-test/environment-test.component';

// {path:'parameters/:id/:id2', canActivate: [ TestParamGuard], component: TestParamsComponent},

const app_routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path:'parameters/:id/:id2', canActivate: [ TestParamGuard], component:TestParamsComponent},
  {path:'queryparameters', component: QueryParametersComponent}
];
 
@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateVariableComponent,
    TwoWayBindingComponent,
    InputOutputPropertiesComponent,
    ChildComponentComponent,
    ChildComponent2Component,
    ViewChildExampleComponent,
    NumberCounterComponent,
    NgIfDirectiveComponent,
    NgForDirectiveComponent,
    NgContentDirectiveComponent,
    NgSwitchDirectiveComponent,
    InputFormatDirective,
    SummaryPipePipe,
    CustomDirectiveComponent,
    CustomPipeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormFormarrayComponent,
    MathComponent,
    ProductsComponent, 
    NavigationComponent,
    TestParamsComponent,
    QueryParametersComponent, 
    HomeComponent,
    LifeCycleParentComponent,
    LifeCycleChildComponent,
    NgTemplateDemoComponent,
    NgTemplateOutletDemoComponent,
    EnvironmentTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(app_routes) 
  ],
  providers: [MathService, ProductsService, TestParamGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
