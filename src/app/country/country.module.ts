import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SetCountryComponent } from './pages/set-country/set-country.component';




@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SetCountryComponent
  ],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SetCountryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
