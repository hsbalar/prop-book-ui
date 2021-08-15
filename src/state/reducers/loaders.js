import { SHOW_LOADER, HIDE_LOADER } from '../actions/types';

const initialState = {
  isOpen: false,
};

export default function loaders(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SHOW_LOADER:
      return {
        isOpen: true,
      };
    case HIDE_LOADER:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}
