import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroComponent } from './components/intro/intro.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { ReduceOperatorComponent } from './components/reduce-operator/reduce-operator.component';
import { TableStylingDirective } from './directives/table-styles.directive';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';
import { DucComponentComponent } from './components/duc-component/duc-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from './components/take-until-operator/take-until-operator.component';
import { DynamicColorChangeDirective } from './directives/dynamic-color-change.directive';
import { TimerComponent } from './components/timer/timer.component';
import { SwitchmapOperatorComponent } from './components/switchmap-operator/switchmap-operator.component';
import { IntervalExampleComponent } from './components/interval-example/interval-example.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { DynamicSeletionDirective } from './directives/dynamic-selection.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    ReduceOperatorComponent,
    TapOperatorComponent,
    DucComponentComponent,
    TakeOperatorComponent,
    TakeUntilOperatorComponent,
    TimerComponent,
    SwitchmapOperatorComponent,
    IntervalExampleComponent,
    CombineLatestComponent,
    TableOfContentsComponent,
    ForkjoinComponent,
    PageNotFoundComponent,

    TableStylingDirective,
    DynamicColorChangeDirective,
    DynamicSeletionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
