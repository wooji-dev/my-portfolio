import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="logo">
          우 정인
        </NavLink>
        <div className="links">
          <NavLink to="/">메인</NavLink>
          <NavLink to="/about">내 소개</NavLink>
          <NavLink to="/projects">프로젝트</NavLink>
        </div>
      </nav>
    </header>
  );
}
