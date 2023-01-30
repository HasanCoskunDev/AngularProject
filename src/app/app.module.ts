import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPageComponent } from './grid-page/grid-page.component';
import { FlexPageComponent } from './flex-page/flex-page.component';
import { FlexPageModule } from './flex-page/flex-page.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GridPageComponent, FlexPageComponent],
  imports: [BrowserModule, AppRoutingModule, FlexPageModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
