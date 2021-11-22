import { Component, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap-operator',
  templateUrl: './switchmap-operator.component.html',
  styleUrls: ['./switchmap-operator.component.scss']
})
export class SwitchmapOperatorComponent{
  @ViewChild('button',{static:true}) button?:  any;
  clicks$?:Observable<any> | any;
  public count: number = 0;
  private sub?: Subscription;
  constructor(){}


 
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.switchExample();
  }
 
  private switchExample() {
    this.sub = this.clicks$
      .pipe(
        switchMap(() => {
          return interval(1000)
        }),tap((count: number)=> this.count = count)
      ).subscribe();
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
}
