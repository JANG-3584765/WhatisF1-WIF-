function LoginModal({ closeLogin }) {
  return (
    <div className="login-modal">

      <div className="modal-content">

        <div className="modal-header">
          <h2>Login</h2>

          <button onClick={closeLogin}>
            X
          </button>
        </div>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <hr />

        <button>Login with Google</button>
        <button>Login with Kakao</button>

      </div>
    </div>
  );
}

export default LoginModal;