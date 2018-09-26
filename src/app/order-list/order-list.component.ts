import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "src/app/app.component";
import { Item } from "../item";
import { OrderList } from '../orderlist';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

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

  constructor(private productsService: ProductServiceService, private router: ActivatedRoute) {
   }

  ngOnInit() { //เรียกตอน component ถูกสร้างในครั้งแรกครั้งเดียว
    this.getData();
  }

  getData(){
    this.productsService.getQueryCustomer(this.orderNo).subscribe({
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