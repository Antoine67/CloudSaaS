import {io} from "./main"

enum NotifStatus {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

enum NotifType {
  USER = "USER",
  DELIVERER = "DELIVERER",
  RESTAURANT = "RESTAURANT"
}

enum UpdateType {
  NEW_ORDER = "NEW_ORDER",
  ORDER_UPDATE = "ORDER_UPDATE",
  WAITING_DELIVERER = "WAITING_DELIVERER"
}


function sendNotification(text: string, status: NotifStatus, type: NotifType = NotifType.USER, restaurantId: any) {
  io.emit('notification', { text: text, status:status, type:type, time: new Date().toISOString(), restaurantId: restaurantId});
}

function sendNeedUpdate(restaurantId: any, type: UpdateType) {
  io.emit('needUpdate', { restaurantId: restaurantId, type:type, time: new Date().toISOString() });
}


export {sendNotification, sendNeedUpdate, UpdateType, NotifStatus, NotifType}