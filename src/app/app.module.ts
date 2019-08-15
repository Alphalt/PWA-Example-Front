import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StoreModule } from '@ngrx/store';
import { store } from './shared/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './redux/effects/products.effect';
import { HomeComponent } from './components/home/home.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomeComponent,
    SearchProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot([ProductsEffects]),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
