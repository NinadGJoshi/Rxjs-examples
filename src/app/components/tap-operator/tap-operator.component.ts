import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, toArray } from 'rxjs/operators';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {

  public person$: Observable<any>;
  public products$: Observable<any>;
  public totalAmount: number = 0;
  public averageAge: number = 0;
  constructor(private dps: DataProviderService) {
    this.person$ = new Observable();
    this.products$ = new Observable();
  }

  ngOnInit(): void {
    let ageTotal: number = 0;
    let priceTotal: number = 0;
    this.products$ = this.dps.getProductsData().pipe(
      mergeMap(data=> data.products),
      tap((product:any)=> {
        priceTotal += product.price;
      }),
      toArray(),
      tap(products=> {
        this.totalAmount = priceTotal/ products.length;
      })
    );

    this.person$ = this.dps.getPersonData().pipe(
      mergeMap(data=> data.person),
      tap((person:any)=> {
        ageTotal += person.age;
      }),
      toArray(),
      tap(persons=> {
        this.averageAge = ageTotal/persons.length;
      })
    );
  }

}
