function LoginModal() {
  return (
    <div className="login-modal">
      <div className="modal-content">

        <h2>Login</h2>

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