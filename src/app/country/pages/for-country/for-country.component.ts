import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  public termino: string = ''
  public doError: boolean = false;

  constructor(
    private CountryService: CountryService
  ) { }

  search() {
    this.doError = false;

    this.CountryService.searchCountry(this.termino)
      .subscribe(resp => {
        console.log(resp);
      }, (err) => {
        this.doError = true;
      });
  }
}
