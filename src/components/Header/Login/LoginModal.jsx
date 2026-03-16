import "./LoginModal.css";

function LoginModal({ closeLogin }) {
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

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="login-button">
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