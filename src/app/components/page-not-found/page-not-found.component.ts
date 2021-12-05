import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [
    trigger('scaleUpEffect', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1000ms'))
    ]),
    trigger('scaleDownEffect', [
      state('initial', style({
        transform: 'scale(1.5)'
      })),
      state('final', style({
        transform: 'scale(1)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1000ms'))
    ])
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  public currentState = 'initial';
  public isDestroyedSub = new Subject<any>();

  public changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit(): void {
    timer(0, 2000).pipe(
      tap(()=> this.changeState()),
      takeUntil(this.isDestroyedSub)
    ).subscribe();
  }

  ngOnDestroy(): void{
    this.isDestroyedSub.next(true);
  }
}
