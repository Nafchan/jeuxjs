/**
 * Created by tamyfabius and Nafissa on 31/05/2017.
 */
import {AccueilComponent} from './accueil/accueil.component';
import {PlanComponent} from './plan/plan.component';
import {HoraireComponent} from './horaire/horaire.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';

/* TYPE ROUTE */
import {AppRouteInterface} from './app-route.interface';

/* LISTE ROUTE */
export const AppRoutes: AppRouteInterface[] = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'horaire', component: HoraireComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
