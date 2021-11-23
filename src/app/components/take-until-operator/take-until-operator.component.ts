import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription, timer } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.scss']
})
export class TakeUntilOperatorComponent implements OnInit {
  @ViewChild('startBtn',{static:true}) startBtn?:  any;
  @ViewChild('stopBtn',{static:true}) stopBtn?:  any;
  public startClicked$?:Observable<any>;
  public stopClicked$?:Observable<any>;
  public count: number = 0;
  private sub?: Subscription;

  constructor(private dps: DataProviderService) {

  }

  ngAfterViewInit(): void {
    this.startClicked$ = fromEvent(this.startBtn.nativeElement, 'click');
    this.stopClicked$ = fromEvent(this.stopBtn.nativeElement, 'click');

    this.startClicked$.pipe(
      switchMap(()=> timer(0, 1000)),
      tap(count=> this.count = count),
      takeUntil(this.stopClicked$)
    ).subscribe(console.log);

  }

  ngOnInit(): void {
  }
}
