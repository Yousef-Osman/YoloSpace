import { Component, OnInit } from '@angular/core';
// import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  disabled: boolean;
  userName: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.startChat2();
  }

  startChat2() {
    let connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:2864/chatHub").build();

  }

  startChat() {
    // this.http.get("http://localhost:2139/api/message").subscribe(aa=> console.log(aa));
    // let connection = new HubConnectionBuilder().withUrl("http://localhost:2139/chatHub").build();
    let connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:2864/chatHub").build();

    //Disable send button until connection is established
    this.disabled = true;

    connection.on("ReceiveMessage", function (user, message) {
      let msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      let encodedMsg = user + " says " + msg;
      let li = document.createElement("li");
      li.textContent = encodedMsg;
      document.getElementById("messagesList").appendChild(li);
    });

    connection.start().then(function () {
      this.disabled = false;
      console.log('connection started');
      
    }).catch(function (err) {
      return console.error(err.toString());
    });

    document.getElementById("sendButton").addEventListener("click", function (event) {
      console.log('working');
      
      // let user = document.getElementById("userInput").value;
      // let message = document.getElementById("messageInput").value;
      // connection.invoke("SendMessage", user, message).catch(function (err) {
      //   return console.error(err.toString());
      // });
      event.preventDefault();
    });
  }
}
