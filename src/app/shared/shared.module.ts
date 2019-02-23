import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    TopNavbarComponent
  ],
  exports: [
    FooterComponent,
    TopNavbarComponent
  ]
})
export class SharedModule { }
