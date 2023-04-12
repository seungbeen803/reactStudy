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
  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);
  let [heart, heartChange] = useState(0);
  
  // return() 안에는 병렬로 태그 2개 이상 기입금지
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* 숙제 : 버튼누르면 첫 글이 '여자코트 추천'으로 바뀌는 기능만들기 */}
      {/* state가 array/object면 독립적 카피본을 만들어서 수정해야 함 */}
      <button onClick={() => {
        // arry/object를 다룰 때 원본은 보존하는게 좋음
        // state변경함수 특징 -> 기존state == 신규state의 경우 변경안해줌
        // array/object 특징 -> array/object 담은 변수엔 화살표만 저장됨

        // array를 수정했지 변수에 있던 화살표는 수정이 안됨
        // 변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴
        // [...변수] : 화살표를 새로 바꿔준다는 의미
        // ... : 괄호 벗기기
        let copy = [...title];
        copy[0] = '여자코트 추천';
        titleChange(copy);
      }}>글수정</button>

      {/* 숙제 : 버튼 누르면 글제목 가나다순 정렬 기능 만들기 */}
      <button >가나다순정렬</button>

      <div className='list'>
        {/* state 변경하는 법-> 등호로 변경금지 */}
        <h4>{title[0]} <span onClick={() => { heartChange(heart+1) }}>❤</span> {heart} </h4>
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
