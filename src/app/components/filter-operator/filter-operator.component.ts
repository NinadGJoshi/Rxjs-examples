import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, mergeMap, toArray } from 'rxjs/operators';
import { Person } from 'src/app/model/Person';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {
  public person$: Observable<any>;
  constructor(private dps: DataProviderService) { 
    this.person$ = new Observable();
  }

  ngOnInit(): void {
    this.person$ = this.dps.getPersonData().pipe(
      mergeMap((result: any) => result.person),
      filter((person: any)=> person.age < 40),
      toArray())
  }
}
