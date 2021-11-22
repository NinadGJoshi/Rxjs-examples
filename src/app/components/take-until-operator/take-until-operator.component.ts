import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, take } from 'rxjs/operators';
import { Person } from 'src/app/model/Person';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.scss']
})
export class TakeUntilOperatorComponent implements OnInit {
  public isLoadingSub?: BehaviorSubject<boolean>;
  public isLoading$?: Observable<boolean>;
  public persons: Array<Person> = [];
  public subs: Array<Subscription> = [];

  constructor(private dps: DataProviderService) {
    this.isLoadingSub = new BehaviorSubject<boolean>(true);
    this.isLoading$ = this.isLoadingSub?.asObservable().pipe(distinctUntilChanged(),shareReplay(1));
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData():void {
    this.isLoadingSub?.next(true);
    // Mocking the actual API call
    // The forjoin will run the callback after the given interval
    this.subs.push(
      forkJoin([this.dps.getPersonData().pipe(map((data: any)=> data['person'])), interval(1000).pipe(take(5))]).subscribe(([data])=>{
        this.persons = data;
        this.isLoadingSub?.next(false);
      },
      (err)=>{
        console.error(err);
        this.isLoadingSub?.next(false);
      })
    )
  }

  ngOnDestroy(){
    this.subs.forEach(sub=> sub.unsubscribe())
  }

}
