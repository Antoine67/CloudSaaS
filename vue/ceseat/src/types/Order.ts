import EOrderState from '@/types/EOrderState';
export default interface OrderPricing {
    paid?: boolean;
    payment_card_id?: number;
    comission_fees?: number;
    restaurant_fees?: number;
    delivering_fees?: number;
    discount?: number;
    total?: number;
}

export default interface OrderMenu {
    id?: any;
    name?: string;
    description?: string
    price?: number
    products?: Array<any>

}

export default interface Order {
    id?: any;
    date?: any;
    restaurant_id?: any;
    customer_id?: any;
    deliverer_id?: any;
    status?: string;
    pricing?: OrderPricing;
    menus?: Array<OrderMenu>;
}