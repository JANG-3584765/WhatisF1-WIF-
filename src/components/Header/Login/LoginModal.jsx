import { useState } from "react";
import "./LoginModal.css";

function LoginModal({ closeLogin }) { // closeLogin: 부모 컴포넌트(App)에서 전달받은 로그인 닫기 함수
  const [email, setEmail] = useState("");
  // email: 현재 이메일 값, setEmail: 이메일 값 변경 함수
  const [password, setPassword] = useState("");
  // password: 현재 비밀번호 값, setPassword: 비밀번호 값 변경 함수

  function handleLogin() { // 로그인 처리 함수
    // 공백 대비: alert 실행 및 로그인 제한
    if(!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if(!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    console.log("email:", email);
    console.log("password:", password);
    closeLogin(); // 로그인 후 모달 닫기
  }

  return (
    <div className="login-modal" onClick={closeLogin}>

      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">
          <h2>로그인</h2>

          <button onClick={closeLogin}>
            X
          </button>
        </div>

          <div className="login-form">
          
          {/*사용자 입력 -> onChange 발생 ->
          setEmail/Password 실행 -> React State 업데이트 */}
          
          {/* 이메일 입력 필드 */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* 비밀번호 입력 필드 */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            className="login-button"
            onClick={handleLogin} // 로그인 처리 함수 버튼 연결 
          >
          로그인
          </button>

          </div>

          <hr />

          <div className="social-login">
          <button className="google-login">
          Google로 계속하기
          </button>

          <button className="kakao-login">
          Kakao로 계속하기
          </button>
          </div>

      </div>

    </div>
  );
}

export default LoginModal;