import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'omni-channel';

  // listItem = [
  //   { id: "1", orderno: "999", orderoate: "23/7/18", customername: "Kri", mobileno: "0979494494" , status: "Online"},
  //   { id: "2", orderno: "9959", orderoate: "23/7/18", customername: "ใคร", mobileno: "0979494494" , status: "Online"},
  //   { id: "3", orderno: "999", orderoate: "23/7/18", customername: "อะไร", mobileno: "0979494494" , status: "Online"}
  // ];
}
