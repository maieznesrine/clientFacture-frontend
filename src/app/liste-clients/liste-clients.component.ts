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




  clientupdateform=new FormGroup({
    client_id:new FormControl(),
    client_firstName:new FormControl(),
    client_lastName:new FormControl(),
    client_emailId:new FormControl(),
  });

  updateCli(updcli){
    this.client=new Client();
    this.client.id=this.ClientId.value;
    this.client.firstName=this.ClientFirstName.value;
    this.client.emailId=this.ClientEmail.value;
    this.client.lastName=this.ClientLastName.value;



    this.clientService.updateClient(this.client.id,this.client).subscribe(
      data => {
        this.isupdated=true;
        this.clientService.getClientsList().subscribe(data =>{
          this.clients =data
        })
      },
      error => console.log(error));
  }

  get ClientId(){
    return this.clientupdateform.get('client_id');
  }
  get ClientFirstName(){
    return this.clientupdateform.get('client_firstName');
  }

  get ClientLastName(){
    return this.clientupdateform.get('client_lastName');
  }
  get ClientEmail(){
    return this.clientupdateform.get('client_emailId');
  }

  changeisUpdate(){
    this.isupdated=false;
  }






}
