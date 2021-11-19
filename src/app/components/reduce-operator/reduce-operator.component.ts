import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, reduce, retry, toArray } from 'rxjs/operators';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.scss']
})
export class ReduceOperatorComponent implements OnInit {

  public products$: Observable<any>;
  public totalAmount$: Observable<number>;
  constructor(private dps: DataProviderService) { 
    this.products$ = new Observable();
    this.totalAmount$ = new Observable();
  }

  ngOnInit(): void {
    this.products$ = this.dps.getProductsData().pipe(
      mergeMap((data)=> data.products),
      toArray()
    );

    this.totalAmount$ = this.products$.pipe(
      mergeMap((data)=> data),
      reduce((total, product: any) => total + product.price, 0)
    )
  }

}
