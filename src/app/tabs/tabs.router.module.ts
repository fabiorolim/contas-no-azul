import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'pagar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/pagar/pagar.module').then(m => m.PagarPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'receber',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/receber/receber.module').then(m => m.ReceberPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
