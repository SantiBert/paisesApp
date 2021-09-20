import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: []
})
export class ForRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countriesList: Country[] = [];
  public countries: Country[] = [];

  constructor(
    private CountryService: CountryService
  ) { }

  activateRegion(region: string) {

    if (region === this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];
    this.CountryService.searchRegion(region).subscribe(
      countries => this.countriesList = countries,
      (err) => this.countriesList = []
    );
  }

}
