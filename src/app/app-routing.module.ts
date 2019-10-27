import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' },
  // { path: 'nova-conta', loadChildren: './pages/nova-conta/nova-conta.module#NovaContaPageModule', canLoad: [AuthGuard] },
  {
    path: 'nova-conta-receber',
    loadChildren: './pages/nova-conta-receber/nova-conta-receber.module#NovaContaReceberPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'editar-conta-receber/:id',
    loadChildren: './pages/nova-conta-receber/nova-conta-receber.module#NovaContaReceberPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'nova-conta-pagar',
    loadChildren: './pages/nova-conta-pagar/nova-conta-pagar.module#NovaContaPagarPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'editar-conta-pagar/:id',
    loadChildren: './pages/nova-conta-pagar/nova-conta-pagar.module#NovaContaPagarPageModule',
    canLoad: [AuthGuard]
  },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'pagar', loadChildren: './pages/pagar/pagar.module#PagarPageModule' },
  // { path: 'receber', loadChildren: './pages/receber/receber.module#ReceberPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
