import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { DucComponentComponent } from './components/duc-component/duc-component.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { IntervalExampleComponent } from './components/interval-example/interval-example.component';
import { IntroComponent } from './components/intro/intro.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { ReduceOperatorComponent } from './components/reduce-operator/reduce-operator.component';
import { SwitchmapOperatorComponent } from './components/switchmap-operator/switchmap-operator.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from './components/take-until-operator/take-until-operator.component';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro'
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'map-operator',
    component: MapOperatorComponent
  },
  {
    path: 'filter-operator',
    component: FilterOperatorComponent
  },
  {
    path: 'reduce-operator',
    component: ReduceOperatorComponent
  },
  {
    path: 'tap-operator',
    component: TapOperatorComponent
  },
  {
    path: 'duc-operator',
    component: DucComponentComponent
  },
  {
    path: 'take-operator',
    component: TakeOperatorComponent
  },
  {
    path: 'take-until-operator',
    component: TakeUntilOperatorComponent
  },
  {
    path: 'switchmap-operator',
    component: SwitchmapOperatorComponent
  },
  {
    path: 'interval-example',
    component: IntervalExampleComponent
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
