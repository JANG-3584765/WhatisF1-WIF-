import { useState } from 'react';
import Header from './components/Header/Header';
import LoginModal from './components/Header/Login/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  /* 로그인 열기 함수 */
  const openLogin = () => {
    setIsLoginOpen(true);
  };

  /* - Header 컴포넌트에 로그인 열기 함수를 props로 전달
     - true일 때만 로그인 모달이 보이도록 조건부 렌더링 */
  return (
    <div>
      <Header openLogin={openLogin} /> 
      {isLoginOpen && <LoginModal />}
    </div>
  )
}

export default App;