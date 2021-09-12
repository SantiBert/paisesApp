import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private ApiUrl: string = 'https://restcountries.eu/rest/v2/'

  constructor(
    private http: HttpClient
  ) { }

  searchCountry(termino: string): Observable<any> {
    const url = `${this.ApiUrl}/name/${termino}`;

    return this.http.get(url);

  }
}
