import { UPDATE_ROOM_INFO, RESET_ROOM_INFO } from "../actions/reservations";

const initialState = {
  checkIn: null,
  checkOut: null,
  roomType: '',
  view: ''
}

export default function reservations(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROOM_INFO: {
      return { ...state, ...action.data };
    }

    case RESET_ROOM_INFO: {
      return initialState;
    }

    default: return state;
  }
}