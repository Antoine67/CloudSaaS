
import Address from "./address"
import Restaurant from "./restaurant"

export default interface Employee {
    id?: any;
    restaurant?: Restaurant;
    address?: Address;
    rib?: string;
    employee?: string;
    description?: string;
  }