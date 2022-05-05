import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './shared/card/card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    MainComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
