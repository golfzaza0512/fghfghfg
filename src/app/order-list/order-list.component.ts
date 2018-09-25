import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "src/app/app.component";
import { Item } from "../item";
import { OrderList } from '../order-list';
import { OmniServiceService } from '../omni-service.service';
import { ActivatedRoute, ParamMap } from "@angular/router";




@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() listItem: Item[];
  @Input() cusList: OrderList;
  @Input() count: string;
 orderNo: string = "";
 constructor(private omniServiceService: OmniServiceService, private   router: ActivatedRoute) {  
  //   this.listItem = [
  //   { id: "1", orderno: "999", orderoate: "23/7/18", customername: "Kri", mobileno: "0979494494" , status: "Online"},
  //   { id: "2", orderno: "9959", orderoate: "23/7/18", customername: "ใคร", mobileno: "0979494494" , status: "Online"},
  //   { id: "3", orderno: "999", orderoate: "23/7/18", customername: "อะไร", mobileno: "0979494494" , status: "Online"}
  // ];

  }

  ngOnInit() { //เรียกตอน component ถูกสร้างในครั้งแรกครั้งเดียว
    this.getData();
  }


  getData(){
    this.omniServiceService.getQueryCustomer(this.orderNo).subscribe({
      next: (cus) =>{
        if(cus.orderWaitingCount == "0"){
        //  this.modalAlert.openDialog("test alert");
        }else{
          this.cusList = cus.orderWaitingList;
        }
        
      },
      error: (err) =>{
        console.log('err ', err);
      },
      complete: () =>{
      },
         
  });
  }
 
}


