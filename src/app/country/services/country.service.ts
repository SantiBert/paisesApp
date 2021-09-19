import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private ApiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(
    private http: HttpClient
  ) { }

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryAlpha(id: string): Observable<Country> {
    const url = `${this.ApiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
