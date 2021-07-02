
import User from "./user"
import Restaurant from "./restaurant"
import RoleEmployee from "./roleEmployee"

export default interface Employee {
    user?: User;
    restaurant?: Restaurant;
    role?: RoleEmployee;
  }