import { SET_SECTIONS } from '../actions/types'
export const initialState = {
  sections: { home: true, projects: false, about: false, contact: false, footer: false, }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_SECTIONS:
      return {
        ...state,
        sections: action.payload
      };

    default:
      return state
  }
};