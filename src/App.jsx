import CursorAurora from './components/CursorAurora';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Lineup from './components/Lineup';
import Details from './components/Details';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* 1. 마우스 지연 Easing 오로라 궤적 효과 */}
      <CursorAurora />

      {/* 2. 상단 고정식 투명 글래스모피즘 네비게이션 헤더 */}
      <Header />

      {/* 3. 2D ➔ 3D Dimensional Unveiling 인터랙티브 캔버스가 탑재된 Hero 섹션 */}
      <Hero />

      {/* 4. 세로 스크롤에 동조하여 단계적으로 떠오르는 3D 제작 과정 */}
      <HowItWorks />

      {/* 5. 50:50 좌우 슬라이딩 확장 및 3D 스핀 목업 Line-up 섹션 */}
      <Lineup />

      {/* 6. 초고화질 크롭 마스킹 줌과 맥동 핫스팟, 글래스 툴팁 Details 섹션 */}
      <Details />

      {/* 7. 흘러가는 그라데이션 CTA 버튼과 사업자 유의사항 Footer 섹션 */}
      <Footer />
    </div>
  );
}
