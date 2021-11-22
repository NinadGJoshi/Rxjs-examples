import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap, distinctUntilChanged, filter, mergeMap, toArray, tap, map} from 'rxjs/operators';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-duc-component',
  templateUrl: './duc-component.component.html',
  styleUrls: ['./duc-component.component.scss']
})
export class DucComponentComponent implements OnInit {
  public form$?: Observable<any>;
  public control$?: Observable<string>;
  public person$? : Observable<any>;
  public sub: Subscription;

  constructor(private dps: DataProviderService) {
    this.form$ = of(new FormGroup({
      'ip-control': new FormControl()
    }))
    this.form$ = this.form$.pipe(
      switchMap((form)=> {
        this.control$ = form.get('ip-control').valueChanges.pipe(
          distinctUntilChanged((prev: string, curr:string)=>{
            return (prev === curr) // if previous and current values are different then value passed to next observer
        }),
        tap((text: string)=> {
          this.getPersonInfo(text);
        }))
        return of(form);
      }),
    )
    this.sub = new Subscription();
  }

  private getPersonInfo(text: string = ''): void {
    this.person$ = this.dps.getPersonData().pipe(
      mergeMap(data=> data['person']),
      filter((person:any) => ((person.firstName.toUpperCase().startsWith(text.toUpperCase())))),
      map((person: any)=>{
        return person = {
          ...person,
          fullName: `${person.firstName} ${person.lastName}`
        }
      }),
      toArray()
    );
  }

  public restoreGrid(): void {
  }

  private ducExample() : void{
    const flag$ = new Observable<boolean>((observer)=> {
      setInterval((()=> observer.next((Math.floor(Math.random()*100)%2)===0)), 1000)
    });
    
    
    this.sub = flag$.pipe(distinctUntilChanged()).subscribe(value => console.log('Next imitted value: ', value));
  }

  ngOnInit(): void {
    this.getPersonInfo();
    // check console to see results
    // this.ducExample();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
