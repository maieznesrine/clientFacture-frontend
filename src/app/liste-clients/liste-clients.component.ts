import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../Client';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.reloadData();
  }
  clients: Observable<Client[]>;
  isupdated = false;
  client : Client=new Client();
  clientsList:any;

  reloadData(){
    this.clients = this.clientService.getClientsList();
  }
  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateClient(id: number){
    this.clientService.getClient(id)
      .subscribe(
        data => {
          this.clientsList=data
        },
        error => console.log(error));
  }

}
