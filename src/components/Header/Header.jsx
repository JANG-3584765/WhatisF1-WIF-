function Header({ openLogin }) {
  return (
    <header className="header">
      <div className="header-inner">

        {/* 로고 */}
        <div className="logo">
          <h1>WIF</h1>
        </div>

        {/* 네비게이션 */}
        <nav className="nav">
          <ul>
            <li>뉴스</li>
            <li>경기 일정</li>
            <li>하이라이트</li>
            <li>결과</li>
            <li>순위</li>
          </ul>
        </nav>

        {/* 로그인 / 회원가입 / 햄버거 메뉴 */}
        <div className="auth-area">

          <button onClick={openLogin} className="login-btn">
            로그인
          </button>

          <button className="signup-btn">
            회원 가입
          </button>

          {/* 햄버거 메뉴 */}
          <button className="hamburger">
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;