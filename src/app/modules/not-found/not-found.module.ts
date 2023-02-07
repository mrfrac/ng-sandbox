import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterLink],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
