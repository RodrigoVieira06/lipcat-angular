import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CoreModule } from './core/core.module';
import { SupportMaterialComponent } from './pages/support-material/support-material.component';
import { ScientificProductionComponent } from './pages/scientific-production/scientific-production.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportMaterialComponent,
    ScientificProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
