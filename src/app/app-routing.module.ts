import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chartjs', loadChildren: () => import('./chartjs/chartjs.module').then(m => m.ChartjsModule) },
  { path: 'flot', loadChildren: () => import('./flot/flot.module').then(m => m.FlotModule) },
  { path: 'inline', loadChildren: () => import('./inline/inline.module').then(m => m.InlineModule) },
  { path: 'uplot', loadChildren: () => import('./uplot/uplot.module').then(m => m.UplotModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
