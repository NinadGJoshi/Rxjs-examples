import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataProviderService {
    constructor(private httpClient: HttpClient) { }
    
    public getPersonData(): Observable<any> {
        return this.httpClient.get('../../assets/data-files/persons.json');
    }

    public getProductsData(): Observable<any> {
        return this.httpClient.get('../../assets/data-files/products.json');
    }
}