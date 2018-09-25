import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Customer } from "./customer";
import { Observable, throwError as observableThrowError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OmniServiceService {
  private customerUrl: string = 'api/TDMWSWeb/resteasy/SO_SERVICE/TDM/V1/mychannel/omniQueryWaitingTransfer'; // URL to web api
  // itemList: Item[];
  requestData = [];
  orderList: Customer[];
  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;'
        //  'Access-Control-Allow-Origin':'*'
      })
    };
    let params = {
      "locationCode": "1100",
      "queryOption": "L"
    };
    return this.http.post(this.customerUrl, params, httpOptions) as Observable<Customer>;
  }
    getQueryCustomer(orderNo: string): Observable < Customer > {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;'
          //  'Access-Control-Allow-Origin':'*'
        })
      };
      let queryOption: string = "";
      if(orderNo == null || orderNo == "") {
      queryOption = "L";
    }else {
      queryOption = "Q";
    }
    let params = {
      "locationCode": "1100",
      "queryOption": queryOption,
      "orderNo": orderNo
    };
    return this.http.post(this.customerUrl, params, httpOptions) as Observable<Customer>;
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
