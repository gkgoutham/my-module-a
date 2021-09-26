import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineChartComponent } from '../inline-chart/inline-chart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inline-chart', component: InlineChartComponent }
]


@NgModule({
  declarations: [
    InlineChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InlineModule { }
