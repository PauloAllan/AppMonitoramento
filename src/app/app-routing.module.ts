import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./page/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./page/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'dados-add',
    loadChildren: () => import('./page/dados-add/dados-add.module').then( m => m.DadosAddPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./page/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
