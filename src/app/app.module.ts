import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStepperComponent } from './order-stepper/order-stepper.component';
import { OrderProfileComponent } from './order-profile/order-profile.component';
// import { OrderStepperComponent } from "./order-stepper";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderStepperComponent,
    OrderProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "orderlist", component: OrderListComponent },
      { path: "orderprofile", component: OrderProfileComponent }
            
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
