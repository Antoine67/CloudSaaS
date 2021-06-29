
import Menu from "@/types/Menu"

export default interface Order {
    id?: any;
    date?: any;
    restaurant_id?: any;
    customer_id?: any;
    deliverer_id?: any;
    status?: string;
    pricing?: any;
    menus?: Array<Menu>;
}