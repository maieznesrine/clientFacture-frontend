import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutClientComponent,
    DetailsClientComponent,
    ListeClientsComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
