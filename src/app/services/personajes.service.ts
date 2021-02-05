import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {personajes} from '../globals';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  url: string;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
    this.url = personajes.path;
  }

  // tslint:disable-next-line:typedef
  findPersonajeById(personajeId: number): Observable<any>{
    return this._http.get<any>(this.url + personajeId);
  }

}
