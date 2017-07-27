import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {Dados} from './types/samu';
import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'


@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  providers: [UFService, SamuService]
})

export class ResumoComponent implements OnInit {
  uf_id = 41;
  uf : UF;
  dados_da_samu : Dados[];
  media: number;

  constructor(private ufService: UFService, private samuService: SamuService)
  { }

  ngOnInit() : void {
    this.getUf();
    this.getSamu();
  }

  getUf(): void {
    this.ufService
      .getPorID(this.uf_id)
      .then(response => {
        this.uf = response;
      })
  }

  getSamu(): void{
    this.samuService
      .getPorUFMunicipiosAtendidosPorEstado(this.uf_id)
      .then(response => {
        this.dados_da_samu = response;
        this.media = this.calcularMedia();
      })
  }
  calcularMedia(): number{
    let acumulador: number = 0;
    for(let entry of this.dados_da_samu){
        acumulador += entry.valor;
    }
    acumulador = acumulador / this.dados_da_samu.length;
    return Math.round(acumulador);
  }
}
