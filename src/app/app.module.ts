import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

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
