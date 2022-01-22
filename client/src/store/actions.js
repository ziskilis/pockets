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
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (dispatch, { email, password, login }) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    login,
  });
  localStorage.setItem("token", data.token);
  dispatch({
    type: REG_USER,
    payload: jwt_decode(data.token),
  });
};

export async function login(dispatch, { email, password }) {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  dispatch({
    type: AUTH_USER,
    payload: jwt_decode(data.token),
  });
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
}

export async function check(dispatch) {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  dispatch({
    type: AUTH_USER,
    payload: jwt_decode(data.token),
  });
}

export async function addCategoryCreator(dispatch, name, userId) {
  const { data } = await $authHost.post("api/category", { name, userId });
  dispatch({
    type: ADD_CATEGORY,
    payload: data,
  });
}

export async function getCategoryCreator(dispatch, userId) {
  const { data } = await $authHost.get(`api/category/${userId}`);
  dispatch({
    type: ADD_ALL_CATEGORY,
    payload: data,
  });
}

export async function addTransactionCreator(dispatch, transaction) {
  const { data } = await $authHost.post("api/transaction", transaction);
  console.log(data);
  dispatch({
    type: ADD_TRANSACTION,
    payload: data,
  });
}

export async function getTransactionCreator(dispatch, userId) {
  const { data } = await $authHost.get(`api/transaction/${userId}`);
  dispatch({
    type: GET_TRANSACTIONS,
    payload: data,
  });
}

export async function deleteTransactionCreator(dispatch, id) {
  await $authHost.get(`api/transaction/delete/${id}`);
  dispatch({
    type: DELETE_TRANSACTION,
    payload: id,
  });
}

export const editTransactionCreator = (dispatch, transaction) => {
  dispatch({
    type: EDIT_TRANSACTION,
    payload: transaction,
  });
};

export async function getWidgetCreator(dispatch, userId) {
  const { data } = await $authHost.get(`api/widget/${userId}`);
  dispatch({
    type: GET_WIDGETS,
    payload: data,
  });
}

export async function addWidgetCreator(dispatch, widget) {
  const { data } = await $authHost.post(`api/widget`, widget);
  dispatch({
    type: ADD_WIDGET,
    payload: data,
  });
}

export async function deleteWidgetCreator(dispatch, id) {
  await $authHost.get(`api/widget/delete/${id}`);
  dispatch({
    type: DELETE_WIDGET,
    payload: id,
  });
}
