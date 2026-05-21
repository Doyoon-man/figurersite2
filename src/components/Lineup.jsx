import { useState } from 'react';
import './Lineup.css';
import chibiImg from '../assets/figures/chibi.png';
import premiumImg from '../assets/figures/premium.png';

export default function Lineup() {
  const [hoveredSlot, setHoveredSlot] = useState(null);

  const lineupData = [
    {
      id: 'chibi',
      badge: 'Cute & Compact',
      title: '치비 미니어처 라인',
      desc: '2.5등신의 앙증맞은 비율로 캐릭터의 귀여움을 극대화한 아기자기한 라인업입니다. 책상 위, 모니터 아래 등 일상의 공간에 부담 없이 올려두기 좋습니다.',
      scale: '높이 약 8cm ~ 10cm',
      material: '프리미엄 무광 코팅 레진',
      imgSrc: chibiImg,
      price: '180,000원 ~'
    },
    {
      id: 'premium',
      badge: 'Elegant & Sophisticated',
      title: '7등신 프리미엄 LD 라인',
      desc: '자작 캐릭터 고유의 완벽한 신체 비율과 의상의 복잡한 주름, 휘날리는 머리칼 하나까지 정밀하게 묘사하는 명품 하이엔드 라인업입니다. 수집가를 위한 투명 아크릴 케이스가 기본 제공됩니다.',
      scale: '높이 약 22cm ~ 25cm (1/7 스케일)',
      material: '반투명 오로라 레진 & 유무광 혼합 마감',
      imgSrc: premiumImg,
      price: '300,000원 ~'
    }
  ];

  return (
    <section className="lineup-section" id="lineup">
      <div className="lineup-container">

        {/* 섹션 타이틀 */}
        <div className="lineup-header">
          <span className="section-subtitle">Premium Line-Up</span>
          <h2 className="title-jalnan lineup-main-title">
            당신의 캐릭터를 빛낼 <br />
            <span className="gradient-text">두 가지 예술적 라인업</span>
          </h2>
        </div>

        {/* 50:50 스플릿 뷰 영역 */}
        <div className="split-view-container">
          {lineupData.map((item) => {
            const isHovered = hoveredSlot === item.id;
            const isAnyHovered = hoveredSlot !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <div
                key={item.id}
                className={`split-slot slot-${item.id} ${isHovered ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                onMouseEnter={() => setHoveredSlot(item.id)}
                onMouseLeave={() => setHoveredSlot(null)}
              >

                {/* 배경 슬롯 글로우 데코 */}
                <div className="slot-bg-glow"></div>

                {/* 슬롯 텍스트 정보 */}
                <div className="slot-info-panel">
                  <span className="slot-badge">{item.badge}</span>
                  <h3 className="slot-title">{item.title}</h3>
                  <p className="slot-desc">{item.desc}</p>

                  <div className="slot-specs">
                    <div className="spec-item">
                      <span className="spec-label">사이즈</span>
                      <span className="spec-value">{item.scale}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">소재/마감</span>
                      <span className="spec-value">{item.material}</span>
                    </div>
                  </div>

                  <div className="slot-footer">
                    <span className="slot-price">{item.price}</span>
                    <a href="#footer-cta" className="slot-select-btn glass-panel">
                      상세 견적 조회
                    </a>
                  </div>
                </div>

                {/* 피규어 목업 3D 드로잉 영역 */}
                <div className="slot-visual-panel">
                  {/* 회전하는 입체 오로라 링 */}
                  <div className="hologram-stage-ring"></div>

                  {/* 피규어 이미지 */}
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="figure-mockup-img"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
