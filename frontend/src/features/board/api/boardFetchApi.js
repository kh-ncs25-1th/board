import fetchApi from "../../../shared/api/fetchApi";

export const boardApi={
  //게시글 목록 조회하는 메서드
  getList: async(params)=>{
    //예: {page:1, size: 10} -> "page=1&size=10"
    const queryString=new URLSearchParams(params).toString;
    return fetchApi(`/api/boards?${queryString}`,{
      method: 'GET'
    })
  },

  //게시글 상세 조회
  get: async(id)=>{ 
    return fetchApi(`/api/boards/${id}`,{
      method: 'GET'
    })
  },

  //게시글 작성
  create: async(data)=>{ 
    return fetchApi(`/api/boards`,{
      method: 'POST',
      body: JSON.stringify(data)//객체를 JSON 문자열화
    });
  },

  //게시글 작성
  update: async(id, data)=>{ 
    return fetchApi(`/api/boards/${id}`,{
      method: 'PUT',
      body: JSON.stringify(data)//객체를 JSON 문자열화
    });
  },
  //게시글 삭제
  delete: async(id)=>{ 
    return fetchApi(`/api/boards/${id}`,{
      method: 'DELETE'  
    });
  },
}