
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export async function getVitals() {
  const res = await api.get('/vitals/summary');
  return res.data;
}
