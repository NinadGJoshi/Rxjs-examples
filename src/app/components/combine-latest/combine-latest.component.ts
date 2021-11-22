import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Person } from 'src/app/model/Person';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  public perchaseList$?: Observable<any>;
  constructor(private dps: DataProviderService) { 

  }

  ngOnInit(): void {
    this.perchaseList$ =combineLatest([this.dps.getPersonData().pipe(map(data=> data['person'])), this.dps.getProductsData().pipe(map(data=> data['products']))]).pipe(
      map((perchaseDetails: any, index)=> {
        const personData = perchaseDetails[0];
        const productData = perchaseDetails[1];
        const record = personData.map((person: Person, index: number)=> {
          const entry = {
            custName: `${person.firstName} ${person.lastName}`,
            custAge: person.age,
            productName: productData[index].name,
            productPrice: productData[index].price
          }
          return entry;
        })
        return record
      }),
      tap(console.log)
    )
  }

}
