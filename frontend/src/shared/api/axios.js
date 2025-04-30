import axios from 'axios'

//axios.create()는 Axios 인스턴스 생성
const api=axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers:{
    'Content-Type': 'application/json'
  }
});

export default api;