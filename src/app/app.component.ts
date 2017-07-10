import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    uf_id = 41;
    uf : UF;
    dados_da_samu : Dados[];
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.uf = this.ufService.getUf(this.uf_id);
        this.dados_da_samu = this.samuService.getMunicipiosDoEstado(this.uf_id);
        this.media = this.calcularMedia();
    }

    calcularMedia(): number{
      let acumulador: number = 0;
      for(let entry of this.dados_da_samu){
          acumulador += entry.valor;
      }
      acumulador = acumulador/this.dados_da_samu.length;
      return Math.round(acumulador);
    }
}
