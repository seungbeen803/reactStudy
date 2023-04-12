import logo from './logo.svg';
// css파일을 쓰려면 상단에서 import 'css파일경로'
import './App.css';

function App() {

  let post = "강남 우동 맛집";
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>
      <h4 style={ {color : 'lightcoral'} }>{ post }</h4>
    </div>
  );
}

export default App;
