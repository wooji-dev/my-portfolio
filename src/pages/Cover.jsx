import { useEffect } from "react";

export default function Cover() {
  useEffect(() => {
    document.title = "Portfolio | 우 정인";
  }, []);

  const scrollToIndex = () => {
    const indexSection = document.getElementById("index-section");
    if (indexSection) {
      indexSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cover-wrap">
      <div className="cover-card">
        <div className="cover-meta">2023-2026</div>
        <h1 className="cover-title">Portfolio</h1>
        <p className="cover-quote">
          “사람들이 찾고, 공유하고, 기억하는 콘텐츠를 기획합니다.”
        </p>

        <div className="cover-info">
          <div>우 정인</div>
          <div>+82-10-8341-0090</div>
          <div>wooji.dev@gmail.com</div>
          <div>https://github.com/wooji-dev</div>
        </div>

        <button className="cover-cta" onClick={scrollToIndex}>
          더 알아보기
        </button>
      </div>
      <div className="blur-bg" aria-hidden="true"></div>
    </section>
  );
}
