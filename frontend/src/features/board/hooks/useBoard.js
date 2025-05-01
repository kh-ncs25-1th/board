import { useCallback, useState } from "react"
import { boardApi } from "../api/boardApi";

export const useBoard=()=>{
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(null);

  const getList=useCallback(async(params)=>{
    try {
      setLoading(true)//api요청중
      const response=await boardApi.getList(params);
      return response.data; //api 응답 데이터 반환
    } catch (error) {
      setError(error)//에러상태 업데이트
      throw error;   //상위로 에러 전파
    }finally{
      setLoading(false)//api요청종료 또는 에러후 처리
    }
    
  },[])//의존성 배열이 비어있음
  //목적: 함수 메모제이션
  // 여러 컴포넌트에서 재사용될 수 있음
  // API 호출 함수가 불필요하게 재생성되는 것을 방지
  // 의존성 배열이 비어있어 훅이 생성될 때 한 번만 함수가 생성됨

  /**
   * 게시글 상세 정보 조회
   */
  const get=useCallback(async(id)=>{
    try {
      setLoading(true)//api요청중
      const response=await boardApi.get(id);
      return response.data; //api 응답 데이터 반환
    } catch (error) {
      setError(error)//에러상태 업데이트
      throw error;   //상위로 에러 전파
    }finally{
      setLoading(false)//api요청종료 또는 에러후 처리
    }
    
  },[])//의존성 배열이 비어있음

  /**
   * 게시글 update 
   */
  const update=useCallback(async(id, data)=>{
    try {
      setLoading(true)//api요청중
      const response=await boardApi.update(id, data);
      return response.data; //api 응답 데이터 반환
    } catch (error) {
      setError(error)//에러상태 업데이트
      throw error;   //상위로 에러 전파
    }finally{
      setLoading(false)//api요청종료 또는 에러후 처리
    }
  },[])

   /**
   * 게시글 삭제처리 
   */
  const remove=useCallback(async(id)=>{
    try {
      setLoading(true)//api요청중
      const response=await boardApi.delete(id);
      return response;
    } catch (error) {
      setError(error)//에러상태 업데이트
      throw error;   //상위로 에러 전파
    }finally{
      setLoading(false)//api요청종료 또는 에러후 처리
    }
  },[])

  /**
   * 게시글 삭제처리 
   */
  const create=useCallback(async(data)=>{
    try {
      setLoading(true)//api요청중
      await boardApi.create(data);
      
    } catch (error) {
      setError(error)//에러상태 업데이트
      throw error;   //상위로 에러 전파
    }finally{
      setLoading(false)//api요청종료 또는 에러후 처리
    }
  },[])



  return{
    loading,
    error,
    getList,
    get,
    update,
    remove,
    create
  }
}