import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import deLocale from '@angular/common/locales/de';
import { ServiceWorkerModule } from '@angular/service-worker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import {SharedModule} from './shared/shared.module';
import {AuthInterceptor} from './shared/auth.interceptor';
import { environment } from '../environments/environment';

registerLocaleData(deLocale, 'de')

const INTERCEPTOR: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
}


@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        PostPageComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [INTERCEPTOR],
    bootstrap: [AppComponent]
})
export class AppModule { }
