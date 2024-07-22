import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { NavigationService } from './services/navigation.service';

@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ComponentsModule], providers: [
        NavigationService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
