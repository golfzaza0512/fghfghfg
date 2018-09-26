import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStepperComponent } from './order-stepper/order-stepper.component';
import { OrderProfileComponent } from './order-profile/order-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { CheckOrderComponent } from './check-order/check-order.component';
import { CustomerReceiptsComponent } from './customer-receipts/customer-receipts.component';
// import { OrderStepperComponent } from "./order-stepper";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderStepperComponent,
    OrderProfileComponent,
    CheckOrderComponent,
    CustomerReceiptsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "orderList", component: OrderListComponent },
      { path: "orderProfile", component: OrderProfileComponent },
      { path: "checkOrder", component: CheckOrderComponent },
      { path: "customerReceipts", component: CustomerReceiptsComponent }
     
      
            
    ]),
    MatTabsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
