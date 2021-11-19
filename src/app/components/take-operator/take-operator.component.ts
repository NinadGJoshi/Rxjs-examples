import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {

  public counter$: Observable<number>;
  constructor() {
    // interval() emits number values from 0 till unsubscribe
    this.counter$ = interval(1000).pipe(take(11),tap(console.log));
  }

  ngOnInit(): void {
  }

}
