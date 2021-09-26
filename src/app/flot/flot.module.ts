import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingChartComponent } from '../floating-chart/floating-chart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'floating-chart', component: FloatingChartComponent }
]


@NgModule({
  declarations: [
    FloatingChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FlotModule { }
