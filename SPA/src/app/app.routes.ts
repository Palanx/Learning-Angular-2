import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true}); //useHash es para utilixar el # en la url lo cual soluciona algunos problemas de estados
