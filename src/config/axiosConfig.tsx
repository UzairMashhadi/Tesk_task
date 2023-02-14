import apiEndpoint from "./environment";
import store from "../store";
import axios from "axios";

const axiosClient = axios.create();

const authHeader = (config: any) => {
  const state = store.getState();
  const token = state.auth.token;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
};

axiosClient.defaults.baseURL = apiEndpoint;
axiosClient.interceptors.request.use(authHeader);

axiosClient.interceptors.request.use(
  (response: any) => {
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export async function getRequest(URL: any) {
  return axiosClient.get(`/${URL}`).then((response) => response.data);
}

export async function postRequest(URL: any, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response.data);
}

export async function patchRequest(URL: any, payload: any) {
  return axiosClient
    .patch(`/${URL}`, payload)
    .then((response) => response.data);
}

export async function deleteRequest(URL: any) {
  return axiosClient.delete(`/${URL}`).then((response) => response.data);
}
