import api from "../../../shared/api/axios";

export const boardApi={
  //게시글 목록 조회하는 메서드
  getList: async (params)=>{
    return api.get('/api/boards',{params}); // /api/boards?pno=1&serch=ddd
  },
  //게시글 상세 조회
  get: async (id)=>{
    return api.get(`/api/boards/${id}`);
  },
  //게시글 작성
  create: async (data)=>{
    return api.post(`/api/boards`,data);
  },
  //게시글 수정
  update: async (id, data)=>{
    return api.put(`/api/boards/${id}`,data);
  },
  //게시글 삭제
  delete: async (id)=>{
    return api.delete(`/api/boards/${id}`);
  },
};