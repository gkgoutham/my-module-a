import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotChartComponent } from '../plot-chart/plot-chart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'plot-chart', component: PlotChartComponent }
]

@NgModule({
  declarations: [
    PlotChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UplotModule { }
