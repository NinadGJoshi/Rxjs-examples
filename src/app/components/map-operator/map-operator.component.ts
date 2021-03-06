import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { map, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  public person$: Observable<any>;
  public source$?: Observable<any>;
  constructor(private dps: DataProviderService) { 
    this.person$ = new Observable();
  }

  ngOnInit(): void {
    this.source$ = this.dps.getPersonData().pipe(map(data=>data['person']));
    this.person$ = this.dps.getPersonData().pipe(
      mergeMap(result => result.person),
      map(
        (person: any) => (
          {
            ...person,
            fullName: `${person.gender === 'male'?'Mr.':'Ms.'}${person.firstName} ${person.lastName}`
          }
        )
      ),
      toArray());
  }
}
