import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DialogModule } from 'impala';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
