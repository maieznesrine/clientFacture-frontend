import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {Client} from '../Client';
import {ClientService} from '../client.service';
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  constructor( private clientService:ClientService) { }
  client: Client = new Client();
  submitted = false;
  ngOnInit() {
  }
  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
  save() {
    this.clientService.saveClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
