/* MODULE ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* MODULE CUSTOM */
import {MenuModule} from './menu/menu.module';
import {AccueilModule} from './accueil/accueil.module';
import {PlanModule} from './plan/plan.module';
import {HoraireModule} from './horaire/horaire.module';
import {ContactModule} from './contact/contact.module';
import {NotFoundModule} from './not-found/not-found.module';

/* ROUTE */
import {AppRoutes} from './app.routes';

/* Component */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    AccueilModule,
    PlanModule,
    HoraireModule,
    ContactModule,
    NotFoundModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
