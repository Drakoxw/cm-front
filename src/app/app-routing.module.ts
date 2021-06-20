import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorComponent } from './layout/skeletor/skeletor.component';
import { DashboradComponent } from './modules/home/dashborad/dashborad.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: '', component : DashboradComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/modules.module').then( (m) => m.ModulesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot
  (routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
