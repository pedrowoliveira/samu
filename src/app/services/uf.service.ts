import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }

  getPorID(id: number): UF {
    let uf:UF;
    for(let entry of UFs){
      if(entry.id == id){
        uf = entry;
        break;
      }
    }
    return uf;
  }
}
