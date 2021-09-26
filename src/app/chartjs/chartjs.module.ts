import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../chart/chart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chart', component: ChartComponent }
]

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChartjsModule { }
