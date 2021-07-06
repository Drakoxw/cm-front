import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { DashboradComponent } from './modules/home/dashborad/dashborad.component';

const routes: Routes = [
  {
    path: '', component: DashboradComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/modules.module').then((m) => m.ModulesModule)
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot
    (routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
