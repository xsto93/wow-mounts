import { SAVE_MOUNTS } from "../actions/mount-actions";

const initialState = {
    mounts: []
}

export function mountsReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_MOUNTS: 
        return {
          ...state,
          mounts: [...action.payload]
        }
      default:
        return state
    }
  }