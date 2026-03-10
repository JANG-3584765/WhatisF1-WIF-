import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">F1 React Study</h1>

        <nav className="nav">
          <ul>
            <li>뉴스</li>
            <li>경기 일정</li>
            <li>하이라이트</li>
            <li>결과</li>
            <li>순위</li>
            <li>시즌 예측</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;