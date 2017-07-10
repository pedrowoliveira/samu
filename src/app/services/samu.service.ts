import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getMunicipiosDoEstado(id: number): Dados[] {
    let valoresDoEstado:Dados[] = [];
    for(let entry of VALORES){
      if(entry.uf_id == id){
        valoresDoEstado.push(entry);
      }
    }
    return valoresDoEstado;
  }
}
