
# Part 01. 프로젝트 생성과 기본레이아웃 적용
## 01.01 React + Vite 포로젝트 생성

```
user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board
$ npm create vite@latest

> npx
> create-vite

|
o  Project name:
|  frontend
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Scaffolding project in D:\ncs\spring-boot\board\frontend...
|
—  Done. Now run:

  cd frontend
  npm install
  npm run dev


user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board
$ cd frontend/

user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board/frontend
$ npm i

added 153 packages, and audited 154 packages in 10s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board/frontend
$ code .

user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board/frontend
$ npm i react-router-dom

added 6 packages, and audited 160 packages in 1s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

user1@DESKTOP-TBR3CH9 MINGW64 /d/ncs/spring-boot/board/frontend
$ npm run dev

```
## 01.02. src\pages\HomePage 폴더생성
- src\pages\HomePage\index.jsx
- src\pages\HomePage\HomePage.css

## 01.03. src\app\layouts 폴더생성
- src\app\providers\DefaultLayout.jsx

## 01.04. src\app\providers 폴더생성
- src\app\providers\AppProvider.jsx

## 01.05. main.jsx 코드 수정
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './app/providers/AppProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
```
---
# Part 02. 게시글 페이지 추가
## 02.01. src\pages\BoardPage 폴더 추가생성
- src\pages\BoardPage\index.jsx
- src\pages\BoardPage\BoardPage.css
- src\app\providers\AppProvider.jsx 코드수정
```
const router=createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "boards",
        element: <BoardPage />
      },
    ]
  }
]);
```
---
# Part 03. 게시글 작성 페이지 생성
## 03.01. src\pages\board\BoardWritePage
- src\pages\board\BoardWritePage\index.jsx (form 요소추가, 서버에 전달하는 로직 작성)
- src\pages\board\BoardWritePage\BoardWritePage.css

- src\pages\board\BoardPage 위치 수정함
- src\app\providers\AppProvider.jsx 코드 수정 및 추가

```
const router=createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "boards",
        children:[
          {
            index: true,
            element: <BoardPage />
          },
          {
            path: "new",
            element: <BoardWritePage />
          },
        ]
      },
     
    ]
  }
]);
```

