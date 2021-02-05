import {Component, OnInit} from '@angular/core';
import {timer, range, of, concat} from "rxjs";
import {ajax} from "rxjs/ajax";
import {
  map,
  mergeMap,
  tap,
  switchMap,
  concatAll,
  reduce
} from "rxjs/operators";
import {PersonajesService} from './services/personajes.service';
import {EpisodesService} from './services/episodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  episodes = [];
  id = 321;

  // tslint:disable-next-line:variable-name
  constructor(private _personajeService: PersonajesService,
              // tslint:disable-next-line:variable-name
              private _episodeService: EpisodesService) {
  }

  ngOnInit(): void {
    this._personajeService.findPersonajeById(this.id).pipe(switchMap((x: any) => x.episode),
      map(x => this._episodeService.getChapter(x.toString())),
      concatAll(),
      reduce((acc, val) => {
        acc.push(val);
        return acc;
      }, [])).subscribe(ep => {
        this.episodes = ep;
    });
  }

}
