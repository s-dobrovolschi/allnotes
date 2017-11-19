import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable()
export class CustomersService {

  private _customersBaseUrl = '/api/customers';

  constructor(private http: HttpClient) { }

  searchCustomer(customerNumber: string): Observable<Customer>{
    return this.http.get<Customer>(this._customersBaseUrl + '/' + customerNumber );
  }
}
