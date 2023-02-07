import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RxjsRoutingModule],
  exports: [HomeComponent],
})
export class RxjsModule {}
