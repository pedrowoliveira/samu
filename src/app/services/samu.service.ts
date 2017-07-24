import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {
  constructor(private http:Http) {}

  private url = "http://api.pgi.gov.br/api/1/serie/27.json";

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().valores as Dados[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

  getPorUFMunicipiosAtendidosPorEstado(id: number): Promise<Dados[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => this.filtrar(response.json().valores as Dados[], id))
      .catch(this.handleError);
  }

  private filtrar(valores: Dados[], id: number): Dados[]{
    let valoresDoEstado:Dados[] = [];
    for(let entry of valores){
      console.log(entry);
      //if(entry.estado_ibge == id){
        //valoresDoEstado.push(entry);
      //}
    }
    return valoresDoEstado;
  }
}
