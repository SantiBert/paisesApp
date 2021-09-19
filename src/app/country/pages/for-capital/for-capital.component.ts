import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent {

  public termino: string = ''
  public doError: boolean = false;
  public countriesList: Country[] = [];

  constructor(
    private CountryService: CountryService
  ) { }

  search(termino: string) {
    this.doError = false;
    this.termino = termino;
    this.CountryService.searchCapital(termino)
      .subscribe(countries => {
        console.log(countries);
        this.countriesList = countries;

      }, (err) => {
        this.doError = true;
        this.countriesList = [];
      });
  }

  seguerencias(termino: any) {
    this.doError = false;
  }

}
