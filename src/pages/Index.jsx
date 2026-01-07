import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function IndexSection() {
  return (
    <section id="index-section" className="section">
      <h2>인덱스</h2>
      <ul className="index-list">
        <li>
          <Link to="/about">내 소개</Link>
        </li>
        <li>
          <Link to="/projects">프로젝트 소개</Link>
        </li>
      </ul>

      <h3>프로젝트 빠른 보기</h3>
      <div className="grid">
        {projects.slice(0, 3).map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
            <div className="card-top">
              <span className="badge">{p.year}</span>
              <h4>{p.title}</h4>
            </div>
            <p className="muted">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
