import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color:white;
      }
    `
  ]

})
export class ServerComponent {
  serverId = 10;
  serverStatus = "Offline";
  serverName = '';


 
}