import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective } from './shared/color.directive';
import { PageNamePipe } from './shared/page-name.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutExtraPageComponent } from './about-page/about-extra-page/about-extra-page.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    PageNamePipe,
    HomePageComponent,
    AboutPageComponent,
    AboutExtraPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

