import { OrderList } from "./orderlist";

export interface Customer {
    message: string;
    status: string;
    orderWaitingCount: string;
    orderWaitingList: OrderList;
}