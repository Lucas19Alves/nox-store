import axios from 'axios';

const API_URL = 'http://localhost/nox-store/api/';

export function getUserDetails() {
  return axios.get(`${API_URL}user`);
}

export function login(data) {
  return axios.post(`${API_URL}login`, data);
}

export function registrar(data) {
  return axios.post(`${API_URL}registrar`, data);
}
