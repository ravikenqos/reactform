import { FILE_UPLOADED, FILE_UPLOAD_ERROR } from '../actions/constants';

export default function(state={}, action) {
  console.log("action", action);
    switch(action.type) {
      case FILE_UPLOADED:
        return { ...state, upload: true };
      case FILE_UPLOAD_ERROR:
        return { ...state, error: action.payload };

    }
    return state;
  }