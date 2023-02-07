import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSearchComponent } from './live-search/live-search.component';

@NgModule({
  declarations: [LiveSearchComponent],
  imports: [CommonModule],
  exports: [LiveSearchComponent],
})
export class LiveSearchModule {}
