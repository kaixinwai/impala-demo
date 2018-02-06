import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { BMapModule } from '@impala/bmap';


@NgModule({
  declarations: [
    AppComponent,
    SimplePopupComponent
  ],
  imports: [
    BrowserModule,
    BMapModule.forRoot({
      accessKey: 'Roo6PGT830lGTMIMoY96hSn88ku24tW1',
      center: [120, 30],
      zoom: 15
    }),
    // ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SimplePopupComponent]
})
export class AppModule {
}
