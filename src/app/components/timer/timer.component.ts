import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public mins:number = 0
  public seconds$: Observable<number>;
  constructor() { 
    this.seconds$ = new Observable();
  }

  public setTimer(): Observable<number> {
    return interval(1000).pipe(tap((count: number)=> {
      this.mins = (Math.floor(count/60));
    }))
  }

  public resetTimer() {
    this.seconds$ = this.setTimer();
  }

  ngOnInit(): void {
    this.seconds$ = this.setTimer();
  }

}
