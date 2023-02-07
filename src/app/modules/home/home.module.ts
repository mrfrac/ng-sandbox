import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterLink],
  exports: [HomeComponent],
})
export class HomeModule {}
