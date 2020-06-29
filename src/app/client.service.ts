import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from './Client';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  constructor(private http: HttpClient) { }

  baseUrl='http://localhost:9091/client';
  baseUrl1='http://localhost:9091/clients';

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:9091/clients', client);
  }
  getClientsList(): Observable<any> {
    return this.http.get('http://localhost:9091/clients');
  }
  deleteClient(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  updateClient(id: number, value :any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

}
