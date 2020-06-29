import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../Client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  constructor(private clientService:ClientService,private route: ActivatedRoute,private router: Router,) { }
  id: number;
  client: Client;

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }
  updateClient() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    return this.gotoList();
  }

  onSubmit() {
    this.updateClient();
  }

  gotoList() {
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
    this.router.navigate(['/clients']);
  }
}
