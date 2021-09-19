import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SetCountryComponent } from './pages/set-country/set-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';


@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SetCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SetCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
