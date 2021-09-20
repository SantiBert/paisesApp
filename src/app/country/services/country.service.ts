import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private ApiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2code;flag;population');
  }

  constructor(
    private http: HttpClient
  ) { }

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCountryAlpha(id: string): Observable<Country> {
    const url = `${this.ApiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {

    const url = `${this.ApiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      )
  }
}
