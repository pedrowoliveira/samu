import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {Dados} from './types/samu';
import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [UFService, SamuService]
})

export class TodosComponent implements OnInit {
  ufs : UF[];
  dados_da_samu : Dados[];

  constructor(private ufService: UFService, private samuService: SamuService)
  { }

  ngOnInit() : void {
    this.getUfs();
    this.getSamu();
  }

  getUfs(): void {
    this.ufService
      .getAll()
      .then(response => {
        this.ufs = response;
      })
  }
  getSamu(): void{
      this.samuService
        .getAllMunicipiosAtendidosPorEstado()
        .then(response => {
          this.dados_da_samu = response;
        })
    }


}
