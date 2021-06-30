export enum EOrderState {
    WAITING_PAYMENT = "WAITING_PAYMENT",
    WAITING_VALIDATION = "WAITING_VALIDATION",
    WAITING_DELIVERER = "WAITING_DELIVERER",
    DELIVERY_IN_PROGRESS = "DELIVERY_IN_PROGRESS",
    ORDER_DELIVERED = "ORDER_DELIVERED",
    ORDER_CANCELLED_CLIENT = "ORDER_CANCELLED_CLIENT",
    ORDER_CANCELLED_RESTAURANT = "ORDER_CANCELLED_RESTAURANT",
}