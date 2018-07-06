import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
    
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was createed! Name is ' + this.serverName;
    this.servers.push()
  }
  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
