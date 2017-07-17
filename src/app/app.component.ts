import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/dados">Dados</a>
  <a routerLink="/resumo">Resumo</a>
  <a routerLink="/todos">Todos</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'App Modularizado';
}
