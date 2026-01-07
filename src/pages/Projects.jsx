import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section">
      <h2>프로젝트 소개</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.slug} className="card">
            <div className="card-top">
              <span className="badge">{p.year}</span>
              <h4>{p.title}</h4>
            </div>
            <p className="muted">{p.summary}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="actions">
              <Link to={`/projects/${p.slug}`} className="btn ghost">
                자세히
              </Link>
              {p.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
