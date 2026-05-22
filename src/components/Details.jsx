import './Details.css';
import chibiImg from '../assets/figures/chibi.png';
import premiumImg from '../assets/figures/premium.png';

export default function Details() {
  const detailsData = [
    {
      id: 'detail-face',
      title: '정밀 데칼과 수공예 눈매',
      desc: '피규어의 생명은 눈매에 있습니다. 0.05mm 두께의 초정밀 실크스크린 데칼을 수차례 레이어링한 후, 전문 아티스트가 수작업으로 투명 하이라이트 코팅을 마감하여 어느 각도에서나 초롱초롱하게 살아있는 시선을 완성합니다.',
      zoomClass: 'zoom-face', // chibi.png 활용
      imagePath: chibiImg,
      bullets: [
        '100% 핸드페인팅 한정 공정',
        '정교한 디테일 표현',
        '피규어 제작 전문가가 다듬어낸 입체감 표현',
      ],
      hotspots: [
        {
          id: 'eye-dot',
          top: '80%',
          left: '60%',
          title: '고급마감으로 반짝이는 눈매',
          text: '우레탄 소재를 이용하여 반짝이는 눈매를 표현합니다.'
        },
        {
          id: 'hair-dot',
          top: '40%',
          left: '35%',
          title: '그라데이션 머릿결 조형',
          text: '고급 에어브러쉬 스킬로, 그라데이션을 자연스럽게 표현합니다.'
        }
      ]
    },
    {
      id: 'detail-dress',
      title: '캐릭터가 어떤 옷을 입더라도 정교하게',
      desc: '복잡하거나 단순한 옷일지라도 캐릭터의 분위기에 맞는 색감과 톤앤매너로 의상을 표현합니다. 아름다운 색감과 질감은 고급스럽고 퀄리티 높은 입체감을 자랑합니다.',
      zoomClass: 'zoom-dress', // premium.png 활용
      imagePath: premiumImg,
      bullets: [
        '캐릭터 원화 100% 재현',
        '실크·메탈릭 등 다양한 재질 표현',
        '채색 전문가의 섬세한 색감 조화',
      ],
      hotspots: [
        {
          id: 'wing-dot',
          top: '40%',
          left: '40%',
          title: '반투명 클리어 파츠',
          text: '크리스탈 레진을 가공해 오로라 광채를 뿜어냅니다.'
        },
        {
          id: 'skirt-dot',
          top: '85%',
          left: '55%',
          title: '메탈릭 실크 그라데이션',
          text: '메탈릭 도료를 사용해 원단의 펄감과 질감 표현을 극대화합니다.'
        }
      ]
    }
  ];

  return (
    <section className="details-section" id="details">
      <div className="details-container">

        {/* 섹션 헤더 */}
        <div className="details-header">
          <span className="section-subtitle">Exquisite Details</span>
          <h2 className="title-jalnan details-main-title">
            가까이 다가보고싶은 <br className="pc-only" />
            <span className="gradient-text">아름다운 퀄리티</span>
          </h2>
          <p className="details-intro">
            섬세하게 빚어낸 입체감과 생동감 넘치는 색채 표현으로
            당신의 캐릭터에 영혼을 불어넣습니다.
          </p>
        </div>

        {/* 지그재그 레이아웃 목록 */}
        <div className="details-list">
          {detailsData.map((detail, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={detail.id} className={`detail-row ${isEven ? 'row-normal' : 'row-reverse'}`}>

                {/* 1. 크롭 줌 디테일 비주얼 (핫스팟 내장) */}
                <div className="detail-visual-wrapper glass-panel">
                  <div className={`area ${detail.zoomClass}`}>
                    <img src={detail.imagePath} alt={detail.title} className="detail-base-img" />
                  </div>

                  {/* 핫스팟 핀 렌더링 */}
                  {detail.hotspots.map((spot) => {
                    return (
                      <div
                        key={spot.id}
                        className="hotspot-pin"
                        style={{ top: spot.top, left: spot.left }}
                      >
                        {/* 맥동하는 핑 이펙트 링 */}
                        <div className="hotspot-pulse-ring"></div>

                        {/* 핫스팟 터치 센터 */}
                        <div className="hotspot-core-dot">
                          <span className="plus-sign">+</span>
                        </div>

                        {/* IN-03 글래스 툴팁 말풍선 */}
                        <div className="glass-tooltip-bubble glass-panel">
                          <h4 className="tooltip-title">{spot.title}</h4>
                          <p className="tooltip-text">{spot.text}</p>
                          <div className="tooltip-arrow"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 2. 텍스트 스펙 설명 */}
                <div className="detail-text-wrapper">
                  <div className="detail-num-label">DETAIL 0{index + 1}</div>
                  <h3 className="detail-title">{detail.title}</h3>
                  <p className="detail-desc">{detail.desc}</p>

                  <div className="detail-bullet-list">
                    {detail.bullets.map((text, i) => (
                      <div key={i} className="bullet-item">
                        <span className="bullet-icon">✦</span>
                        <span className="bullet-text">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
