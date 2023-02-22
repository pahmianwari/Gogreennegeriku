import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaftarComponent } from './daftar/daftar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },

  {
    path: 'daftar',
    component: DaftarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
