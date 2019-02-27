import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule  } from 'ngx-bootstrap/modal';
import { ContactComponent } from './feature/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CarouselModule.forRoot(),
    ModalModule .forRoot(),
    

  ],
  entryComponents: [ContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
