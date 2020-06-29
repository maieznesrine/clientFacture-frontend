import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjoutClientComponent} from './ajout-client/ajout-client.component';
import {ListeClientsComponent} from './liste-clients/liste-clients.component';
import {UpdateClientComponent} from './update-client/update-client.component';
import {ListeFacturesComponent} from './liste-factures/liste-factures.component';


const routes: Routes = [
  {path:'add',component:AjoutClientComponent},
  {path:'clients',component:ListeClientsComponent},
  {path:'clients/update/:id',component:UpdateClientComponent},
  {path:'clients/facture/:id',component:ListeFacturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
