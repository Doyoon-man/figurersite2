import { useState, useEffect } from 'react';
import './Header.css';
import logoIcon from '../assets/figures/hero.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* 브랜드 로고 */}
        <a href="#hero" className="header-logo">
          <img src={logoIcon} alt="캐릭터 로고" className="logo-icon" />
          <span className="logo-text">DREAM DRAWING</span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav className="header-nav">
          <a href="#hero" className="nav-link">오프닝</a>
          <a href="#how-it-works" className="nav-link">제작단계</a>
          <a href="#lineup" className="nav-link">라인업</a>
          <a href="#details" className="nav-link">디테일컷</a>
        </nav>

        {/* 상단 예약하기 CTA 숏컷 */}
        <div className="header-actions">
          <a href="#footer-cta" className="header-cta-btn glass-panel">
            예약하기
          </a>
        </div>

      </div>
    </header>
  );
}
