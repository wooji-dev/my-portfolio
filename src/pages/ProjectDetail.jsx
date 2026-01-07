import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/projects" className="btn ghost">
          목록으로
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="breadcrumb">
        <Link to="/projects">프로젝트</Link> / <span>{project.title}</span>
      </div>

      <h2>{project.title}</h2>
      <p className="muted">
        {project.year} · {project.tags.join(" / ")}
      </p>

      <article className="article">
        {project.content.map((b, i) => (
          <div key={i} className="article-block">
            <h3>{b.heading}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </article>

      {project.links?.length ? (
        <div className="actions">
          {project.links.map((l) => (
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
      ) : null}
    </section>
  );
}
