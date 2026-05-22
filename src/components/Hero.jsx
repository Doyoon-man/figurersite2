import './Hero.css';
import FigureCarousel from './FigureCarousel';
import prayelfFigure from '../assets/figures/prayelf-figure.jpg';
import prayelfIllust from '../assets/figures/prayelf-illust.jpg';

// 한 글자씩 분리하여 애니메이션을 적용하는 헬퍼 함수
const renderWavyText = (text, startIdx, isGradient = false) => {
  const chars = Array.from(text);
  const totalChars = chars.length;

  return chars.map((char, index) => {
    const globalIdx = startIdx + index;

    // 그라디언트 텍스트의 매끄러운 흐름을 보존하기 위한 백그라운드 위치/크기 계산
    const gradientStyle = isGradient ? {
      background: 'var(--gradient-aurora)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      backgroundSize: `${totalChars * 100}% 100%`,
      backgroundPosition: `${totalChars > 1 ? (index / (totalChars - 1)) * 100 : 0}% 0%`,
      display: 'inline-block'
    } : {};

    return (
      <span
        key={index}
        className="wavy-char"
        style={{
          ...gradientStyle,
          animationDelay: `${globalIdx * 0.04}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    );
  });
};

export default function Hero() {

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">

        {/* 좌측 콘텐츠 텍스트 */}
        <div className="hero-text-content">
          <div className="badge-wrapper">
            <span className="premium-badge">1:1 Premium Customizing</span>
          </div>
          <h1 className="hero-headline">
            <span className="wavy-line">
              {renderWavyText("내가 그린 캐릭터", 0)}
            </span>
            <span className="wavy-line">
              {renderWavyText("상상을 현실로,", 13)}
            </span>
            <span className="wavy-line">
              {renderWavyText("내 손안에 들어오다.", 21, true)}
            </span>
          </h1>
          <p className="hero-subcopy">
            당신의 캐릭터가 세상에 단 하나뿐인 아름다운 피규어로 탄생합니다.<br />
            캐릭터의 설정을 기반으로 최고의 디테일을 살려 입체적으로 구현합니다.
          </p>
          <div className="hero-cta-wrapper">
            <a href="#footer-cta" className="btn-aurora">
              지금 바로 예약주문하기
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* 우측 이미지 호버 비주얼 영역 */}
        <div className="hero-visual-area">
          <div className="visual-background-glow"></div>
          <div className="hero-figure-card" id="hero-figure-card">
            <img
              src={prayelfIllust}
              alt="Pray Elf 일러스트"
              className="figure-img figure-img--default"
            />
            <img
              src={prayelfFigure}
              alt="Pray Elf 피규어"
              className="figure-img figure-img--hover"
            />
          </div>
        </div>

      </div>

      {/* 무한 컨베이어 벨트 피규어 캐러셀 */}
      <FigureCarousel />
    </section>
  );
}
