import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveSearchComponent } from './live-search/live-search/live-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'live-search',
    component: LiveSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
