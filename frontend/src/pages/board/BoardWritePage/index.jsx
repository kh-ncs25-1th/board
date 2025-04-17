import { useState } from 'react';
import './BoardWritePage.css'
const BoardWritePage=()=>{
  const [title, setTitle]=useState('')
  const [content, setcontent]=useState('')
  const hanleSubmit=(e)=>{
    e.preventDefault();
    //객체로
    const boardData={
      title, //동일 title: title
      content
    }
    postData("http://localhost:8080/api/boards", boardData)
    .then(data=>{

      console.log("게시글저장 성공", data);
    })
    .catch(error=>{
      console.log("서버 연결 실패")
    })

  }
  // POST 메서드 구현 예제
async function postData(url = "", data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE 등
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

  return(
<section>
  <h1>게시글 작성 폼</h1>
  <form onSubmit={hanleSubmit}>
    <p>
      <input name='title'  value={title} onChange={(e)=>setTitle(e.target.value)} />
    </p>
    <p>
      <textarea name='content' value={content} onChange={(e)=>setcontent(e.target.value)}  ></textarea>
    </p>
    <p>
      <button type='submit'>등록</button>
    </p>
  </form>
</section>)}
export default BoardWritePage;