import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { UfComponent } from './uf.component';
import { ResumoComponent } from './resumo.component';
import { TodosComponent } from './todos.component';

import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';

@NgModule({
  declarations: [
    AppComponent,
    UfComponent,
    ResumoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'dados',
        component: UfComponent
      },
      {
        path: 'resumo',
        component: ResumoComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      }
    ])
  ],
  providers: [
    UFService,
    SamuService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
