import api from "@/shared/api/axios";

export const userApi={

  //회원가입처리
  create: async(data)=>{
    return api.post('/api/users',data);
  },
  //회원조회->mypage
  //회원정보수정
  //로그인처리
};