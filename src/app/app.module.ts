import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { InformasiComponent } from './informasi/informasi.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { KeluarComponent } from './keluar/keluar.component';
import { VoluenteerComponent } from './voluenteer/voluenteer.component';
import { SuksesComponent } from './sukses/sukses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformasiComponent,
    EdukasiComponent,
    AgendaComponent,
    KeluarComponent,
    VoluenteerComponent,
    SuksesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AuthRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
