export const UPDATE_ROOM_INFO = "UPDATE_ROOM_INFO";
export const RESET_ROOM_INFO = "RESET_ROOM_INFO";

export function updateRoomInfo(data) {
  return { type: UPDATE_ROOM_INFO, data }
}

export function resetRoomInfo() {
  return { type: RESET_ROOM_INFO }
}