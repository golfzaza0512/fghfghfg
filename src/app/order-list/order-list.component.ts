import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "src/app/app.component";
import { Item } from "../item";
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  listItem : Item[];
  constructor() {  
    this.listItem = [
    { id: "1", orderno: "999", orderoate: "23/7/18", customername: "Kri", mobileno: "0979494494" , status: "Online"},
    { id: "2", orderno: "9959", orderoate: "23/7/18", customername: "ใคร", mobileno: "0979494494" , status: "Online"},
    { id: "3", orderno: "999", orderoate: "23/7/18", customername: "อะไร", mobileno: "0979494494" , status: "Online"}
  ];

  }

  ngOnInit() {
  }
 
}


