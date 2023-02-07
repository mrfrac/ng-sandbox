import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
  imports: [RouterModule.forRoot(routes), HomeModule, NotFoundModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
