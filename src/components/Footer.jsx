import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      
      {/* 1. 최종 메인 CTA 구역 */}
      <div className="footer-cta-container" id="footer-cta">
        <div className="cta-glass-box glass-panel">
          <div className="cta-bg-aurora-glow"></div>
          
          <span className="cta-pre">LIMITED RESERVATION</span>
          <h2 className="title-jalnan cta-title">
            당신의 꿈을 세상에 단 하나뿐인 <br />
            <span className="gradient-text">보석 같은 실물로 완성해 보세요</span>
          </h2>
          <p className="cta-desc">
            현재 5월 제작 슬롯이 얼마 남지 않았습니다. <br />
            지금 예약하시면 3D 모델링 피드백 단계에서 추가 파츠 1종이 무료 제공됩니다.
          </p>

          <div className="cta-btn-wrapper">
            <button className="btn-aurora main-cta-button" onClick={() => alert('예약 신청 폼으로 연결됩니다. (데모)')}>
              지금 바로 예약주문하기 (예약 슬롯 선점)
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. 유의사항 및 고객 안내 정보 */}
      <div className="footer-info-container">
        <div className="footer-max-width">
          
          {/* 제작 동의 및 유의사항 (글래스 패널) */}
          <div className="precautions-box glass-panel">
            <h4 className="precautions-title">⚠️ 주문 제작 시 반드시 읽어주세요!</h4>
            <ul className="precautions-list">
              <li>본 제품은 1:1 개인 맞춤 주문제작 상품으로, <strong>Phase 2: 3D 모델링 확정 및 출력 시작 단계 이후에는 취소 및 환불이 불가능</strong>합니다.</li>
              <li>2D 일러스트의 해상도가 지나치게 낮거나 입체 해석이 불분명할 경우, 담당 아트 디렉터가 1:1 상담을 통해 포즈나 세부 디자인의 변형을 조율해 드립니다.</li>
              <li>평균 제작 기간은 모델링 컨펌 후 영업일 기준 15일~20일이 소요되며, 작업 난이도 및 조형 파츠 개수에 따라 일정은 일부 연장될 수 있습니다.</li>
            </ul>
          </div>

          <div className="footer-divider"></div>

          {/* 소셜 및 고객센터, 법인 정보 */}
          <div className="footer-bottom-grid">
            <div className="footer-brand">
              <span className="brand-logo-text">DREAM DRAWING</span>
              <p className="brand-sub">상상 속의 세계를 현실로 해방합니다.</p>
            </div>

            <div className="footer-links">
              <h5 className="link-title">NAVIGATION</h5>
              <ul className="link-list">
                <li><a href="#hero">오프닝 (Hero)</a></li>
                <li><a href="#how-it-works">제작 단계 (Process)</a></li>
                <li><a href="#lineup">제품 라인업 (Line-up)</a></li>
                <li><a href="#details">상세 디테일 (Details)</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h5 className="link-title">CONTACT US</h5>
              <p className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                help@dreamdrawing.co.kr
              </p>
              <p className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                1644-2026 (평일 10:00 - 18:00)
              </p>
              <p className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                </svg>
                카카오톡 채널: @꿈의드로잉_피규어
              </p>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© {currentYear} DREAM DRAWING Co., Ltd. All Rights Reserved. Designed for premium custom figures.</p>
          </div>

        </div>
      </div>

    </footer>
  );
}
