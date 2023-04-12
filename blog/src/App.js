// eslint-disable -> warning 메세지 없애는 코드
// css파일을 쓰려면 상단에서 import 'css파일경로'
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  // state 만드는 법
  // 1. import { useState }
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명] => [state에 보관했던 자료, state 변경도와주는 함수]
  
  // 숙제 : 제목들 state로 만들기
  // array 자료형
  let [title, b] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);
  let [heart] = useState('0');
  
  // return() 안에는 병렬로 태그 2개 이상 기입금지
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={() => { console.log(1)}}>❤</span> {heart} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
