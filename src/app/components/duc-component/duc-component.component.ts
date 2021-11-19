import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-duc-component',
  templateUrl: './duc-component.component.html',
  styleUrls: ['./duc-component.component.scss']
})
export class DucComponentComponent implements OnInit {
  public form$?: Observable<any>;
  public control$?: Observable<string>;
  public sub: Subscription;

  constructor() {
    this.form$ = of(new FormGroup({
      'ip-control': new FormControl()
    }))
    this.form$ = this.form$.pipe(
      switchMap((form)=> {
        this.control$ = form.get('ip-control').valueChanges.pipe(distinctUntilChanged((prev, curr)=>{
          return (prev === curr) // if previous and current values are different then value passed to next observer
        }))
        return of(form);
      }),
    )
    this.sub = new Subscription();
  }

  private ducExample() : void{
    const flag$ = new Observable<boolean>((observer)=> {
      setInterval((()=> observer.next((Math.floor(Math.random()*100)%2)===0)), 1000)
    });
    
    
    this.sub = flag$.pipe(distinctUntilChanged()).subscribe(value => console.log('Next imitted value: ', value));
  }

  ngOnInit(): void {
    // check console to see results
    this.ducExample();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
