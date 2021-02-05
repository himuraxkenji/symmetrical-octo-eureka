import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {episodios} from '../globals';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private url = '';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
    this.url = episodios.path;
  }

  // tslint:disable-next-line:typedef
  getChapter(url: string): Observable<any>{
    return this._http.get(url);
  }

  // getChapterByCharacter(idPersonaje: number): Observable<any> {
  //
  // }


}
