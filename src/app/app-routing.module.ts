import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';
import { ForCountryComponent } from './country/pages/for-country/for-country.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { SetCountryComponent } from './country/pages/set-country/set-country.component';

const routes: Routes = [
    {
        path: '',
        component: ForCountryComponent,
        pathMatch: 'full',
    },
    {
        path: 'capital',
        component: ForCapitalComponent,
    },
    {
        path: 'region',
        component: ForRegionComponent,
    },
    {
        path: 'pais/:id',
        component: SetCountryComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }