export default function About() {
  return (
    <section className="section">
      <h2>내 소개</h2>
      <p className="lead">
        콘텐츠 기획과 아카이빙에 관심이 많은 학생입니다. 사람들이{" "}
        <strong>찾고·공유하고·기억하는</strong> 경험을 설계하는 것을 즐깁니다.
      </p>

      <div className="two-col">
        <div>
          <h3>핵심 역량</h3>
          <ul>
            <li>리서치 기반 스토리텔링</li>
            <li>정보 구조 설계(IA)</li>
            <li>프로토타이핑(Figma, React)</li>
          </ul>
        </div>
        <div>
          <h3>관심 분야</h3>
          <ul>
            <li>디지털 아카이브</li>
            <li>에디토리얼 디자인</li>
            <li>데이터 기반 콘텐츠</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
