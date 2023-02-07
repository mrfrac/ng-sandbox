import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./modules/rxjs/rxjs.module').then((module) => module.RxjsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
