import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AuthModule } from './auth/auth.module';
import { DaftarComponent } from './auth/daftar/daftar.component';
import { LoginComponent } from './auth/login/login.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { HomeComponent } from './home/home.component';
import { InformasiComponent } from './informasi/informasi.component';
import { KeluarComponent } from './keluar/keluar.component';
import { SuksesComponent } from './sukses/sukses.component';
import { VoluenteerComponent } from './voluenteer/voluenteer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'daftar',
    component: DaftarComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'informasi',
    component: InformasiComponent
  },

  {
    path: 'edukasi',
    component: EdukasiComponent
  },
  
  {
    path: 'agenda',
    component: AgendaComponent
  },

  {
    path: 'keluar',
    component: KeluarComponent
  },

  {
    path : 'auth',
    loadChildren : () => AuthModule
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },

  {
    path: 'voluenteer',
    component: VoluenteerComponent
  },

  {
    path: 'sukses',
    component: SuksesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
