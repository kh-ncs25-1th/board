
const BASE_URL=import.meta.env.VITE_API_URL;

const fetchApi= async (endpoint, options={})=>{

  const response=await fetch(`${BASE_URL}${endpoint}`,{
    ...options,
    headers:{      
      'Content-Type': 'application/json',
      ...options.headers,
    },

  });
  if(!response.ok){
    throw new Error("API 요청 실패!");
  }

  return response.json();
};

export default fetchApi;