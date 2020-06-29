import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  baseUrl='http://localhost:9091/factures';

  getFactureByClient(id :number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
