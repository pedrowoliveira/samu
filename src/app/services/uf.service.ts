import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';



@Injectable()
export class UFService {

  constructor(private http: Http) {}
  getAll(): Promise<UF[]> {
    return this.http
    .get('/api/uf')
    .toPromise()
    .then(response => response.json() as UF[])
    .catch(this.handleError)
  }

  getPorID(id: number): Promise<UF> {
    return this.http
      .get(`/api/uf/${id}`)
      .toPromise()
      .then(response => response.json() as UF)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}
