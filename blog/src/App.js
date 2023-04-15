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
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);
  let [heart, setHeart] = useState([0, 0, 0]);
  // 2. UI의 현재 상태를 state로 저장
  // 형식은 자유 모달창상태 표현만 가능하면 됨
  let [modal, setModal] = useState(false); // 스위치 역할

  // map() 사용법 -> 괄호 안에 들어가는 함수를 callback함수라고 한다.
  // map을 사용할 때는 callback()을 사용하는데

  // map의 기능
  [1, 2, 3].map(function (a) {
    // 1. array자료 개수만큼 함수안의 코드 실행해줌
    // console.log(1);
    // 2. 함수의 파라미터는 array안에 있던 자료임
    // console.log(a);
    // 3. return에 뭐 적으면 array로 담아줌
    return '1233211';
  });

  // return() 안에는 병렬로 태그 2개 이상 기입금지
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* 숙제 : 버튼누르면 첫 글이 '여자코트 추천'으로 바뀌는 기능만들기 */}
      {/* state가 array/object면 독립적 카피본을 만들어서 수정해야 함 */}
      {/* <button onClick={() => {
        // arry/object를 다룰 때 원본은 보존하는게 좋음
        // state변경함수 특징 -> 기존state == 신규state의 경우 변경안해줌
        // array/object 특징 -> array/object 담은 변수엔 화살표만 저장됨

        // array를 수정했지 변수에 있던 화살표는 수정이 안됨
        // 변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴
        // [...변수] : 화살표를 새로 바꿔준다는 의미
        // ... : 괄호 벗기기
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>수정</button> */}

      {/* 숙제 : 버튼 누르면 글제목 가나다순 정렬 기능 만들기 */}
      {/* <button onClick={() => {
        let titleSort = [...title];
        setTitle(titleSort.sort());
      }}>정렬버튼</button> */}

      {/* <div className='list'>
        // state 변경하는 법-> 등호로 변경금지
        <h4>{title[0]} <span onClick={() => { setHeart(heart + 1) }}>❤</span> {heart} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      //   ! 느낌표 기호는 true 왼쪽에 붙이면 false로 바꿔주고 
      // false 왼쪽에 붙이면 true로 바꿔줍니다
      // !true는 출력해보면 false입니다.
      // !false는 출력해보면 true입니다.
        <h4 onClick={() => { setModal(!modal) }} >{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // map()함수
        // 1. 왼쪽 array 자료만큼 내부코드 실행
        // 2. return 오른쪽에 있는걸 array로 담아줌
        // 3. 유용한 파라미터 2개 사용가능
        // a는 array안에 있던 데이터
        // i는 반복문 돌 때마다 0부터 1씩 증가하는 정수
        title.map(function (a, i) {
          return (
            <div className='list'>
              <h4>
                {title[i]}
                <span onClick={() => {
                  // 중요
                  let copy = [...heart];
                  copy[i] += 1;
                  setHeart(copy);
                }}>❤️</span> {heart[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


      {/* 둘다 사용 가능 */}
      {/* 3. state에 따라 UI가 어떻게 보일지 작성(조건문) */}
      {/* 삼항연산자(ternary operator)
        (조건식) ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드*/}
      {
        (modal === true) ? <Modal /> : null
      }
      {/* <Modal></Modal> */}
      {/* <Modal/> */}

    </div>
  );
}

// 컴포넌트 만드는 법
// 1. function 만들기
// 2. return() 안에 html담기
// 3. <함수명></함수명>쓰기
// 다른 function 바깥에 만들기&영어대문자

// 동적인 UI만드는 step
// 1. html css로 미리 디자인 완성
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
