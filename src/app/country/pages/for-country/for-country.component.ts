import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class ForCountryComponent {

  public termino: string = ''
  public doError: boolean = false;
  public countriesList: Country[] = [];
  public countrySugList: Country[] = [];
  public showSuje: boolean = false;

  constructor(
    private CountryService: CountryService
  ) { }

  search(termino: string) {
    this.showSuje = false;
    this.doError = false;
    this.termino = termino;
    this.CountryService.searchCountry(termino)
      .subscribe(countries => {
        console.log(countries);
        this.countriesList = countries;

      }, (err) => {
        this.doError = true;
        this.countriesList = [];
      });
  }

  seguerencias(termino: string) {
    this.doError = false;
    this.termino = termino;
    this.showSuje = true;
    this.CountryService.searchCountry(termino).subscribe(
      countries => this.countrySugList = countries.splice(0, 3),
      (err) => this.countrySugList = []
    );
  }

  searchSug(termino: string) {
    this.search(termino);
  }
}
