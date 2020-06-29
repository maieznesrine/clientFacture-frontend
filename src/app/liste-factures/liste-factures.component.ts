import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../Client';
import {ClientService} from '../client.service';
import {FactureService} from '../facture.service';
import {Facture} from '../Facture';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.css']
})
export class ListeFacturesComponent implements OnInit {

  constructor(private factureService:FactureService,private route: ActivatedRoute) { }
  factures: Observable<Facture[]>;

  private id:number;
  ngOnInit() {
    //pour recuperer un id de l'url
    this.id = this.route.snapshot.params.id;
    console.log("this id is "+this.id);
    this.reloadData();
  }
  reloadData(){
   this.factures = this.factureService.getFactureByClient(this.id);
  }
}
