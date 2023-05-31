import { LOCALE_ID, NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsHN from "@angular/common/locales/es-HN";   // Modulo Español Hoduras
import localeFrCA from "@angular/common/locales/fr-CA";   // Modulo Frances Canada
import { registerLocaleData } from "@angular/common";     // Importar funcion de registro
registerLocaleData(localeEsHN);                           // Registrar los locales
registerLocaleData(localeFrCA);                           // Registrar los locales


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
