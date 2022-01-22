import {
  ADD_ALL_CATEGORY,
  ADD_CATEGORY,
  ADD_TRANSACTION,
  ADD_WIDGET,
  AUTH_USER,
  DELETE_TRANSACTION,
  DELETE_WIDGET,
  EDIT_TRANSACTION,
  LOGOUT_USER,
  REG_USER,
  GET_TRANSACTIONS,
  GET_WIDGETS,
} from "./types";

const initialState = {
  user: { isAuth: false },
  category: [],
  transactions: [],
  widgets: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, category: [...state.category, action.payload] };
    case ADD_ALL_CATEGORY:
      return { ...state, category: action.payload };
    case GET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case REG_USER:
      return { ...state, user: { ...action.payload, isAuth: true } };
    case AUTH_USER:
      return { ...state, user: { ...action.payload, isAuth: true } };
    case LOGOUT_USER:
      return { ...state, user: { isAuth: false } };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case EDIT_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),
      };
    case ADD_WIDGET:
      return { ...state, widgets: [...state.widgets, action.payload] };
    case GET_WIDGETS:
      return { ...state, widgets: action.payload };
    case DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter((widget) => widget.id !== action.payload),
      };
    default:
      return state;
  }
};
