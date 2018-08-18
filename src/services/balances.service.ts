import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BalancesService {
    url:string = "./assets/stubs/creditBalanceList.json";
    constructor(private http: Http) { }
    getBalances(): any{
        return this.http.get(this.url).map((response) => response.json());
    }
}