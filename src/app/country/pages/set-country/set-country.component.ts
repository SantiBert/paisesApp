import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-set-country',
  templateUrl: './set-country.component.html',
  styles: [
  ]
})
export class SetCountryComponent implements OnInit {

  public country!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private CountryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.CountryService.searchCountryAlpha(id)),
        tap(console.log))
      .subscribe(contry => this.country = contry);

    /*
    this.activateRoute.params.subscribe(({ id }) => {
      this.CountryService.searchCountryAlpha(id).subscribe(country => {
        console.log(country);
      });
    });
    */
  }

}
