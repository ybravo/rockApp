import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { BandsearchComponent } from './components/bandsearch/bandsearch.component';
import { DetailsComponent } from './components/details/details.component';

export const ROUTES: Routes = [{
    path: 'home',
    component: HomeComponent
},

{
    path: 'search/:termino',
    component: BandsearchComponent
},
{
    path: 'details/:id',
    component: DetailsComponent
},
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},

{
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
}
];
