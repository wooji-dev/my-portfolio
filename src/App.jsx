import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cover from "./pages/Cover.jsx";
import IndexSection from "./pages/Index.jsx"; // 기존 Index.jsx를 섹션으로 활용
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

export default function App() {
  return (
    <div className="app">
      <Routes>
        {/* 랜딩 페이지: 표지 + 인덱스 섹션 */}
        <Route
          path="/"
          element={
            <>
              <Cover />
              <main className="container">
                <IndexSection /> {/* 인덱스는 같은 페이지에서 스크롤 */}
              </main>
              <Footer />
            </>
          }
        />

        {/* 나머지 SPA 페이지 */}
        <Route
          path="/about"
          element={
            <>
              <Header />
              <main className="container">
                <About />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <main className="container">
                <Projects />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Header />
              <main className="container">
                <ProjectDetail />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}
