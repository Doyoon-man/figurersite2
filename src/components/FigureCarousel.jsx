import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './FigureCarousel.css';
import fig01 from '../assets/figures/figure-01.jpg';
import fig02 from '../assets/figures/figure-02.jpg';
import fig03 from '../assets/figures/figure-03.jpg';
import fig04 from '../assets/figures/figure-04.jpg';
import fig05 from '../assets/figures/figure-05.jpg';

/* ─── 피규어 데이터 (후기 포함) ─── */
const figures = [
  {
    src: fig01,
    name: 'Divine Divinity',
    sub: '신성 여신 시리즈',
    label: 'NEW',
    stars: 5,
    reviews: [
      { id: 1, author: '김**', date: '2026-05-20', text: '정말 아름다워요! 디테일과 색감이 화면보다 실물이 훨씬 뛰어납니다. 강력 추천해요! 💖' },
      { id: 2, author: '박**', date: '2026-05-18', text: '마감 처리가 완벽합니다. 포장도 꼼꼼해서 기분 좋게 받았어요.' }
    ]
  },
  {
    src: fig02,
    name: 'Rose Princess',
    sub: '로즈 프린세스 시리즈',
    label: 'LIMITED',
    stars: 5,
    reviews: [
      { id: 3, author: '이**', date: '2026-05-19', text: '한정판이라 망설이지 않고 샀는데 너무 만족스럽습니다! 장식장이 환해졌어요 ✨' },
      { id: 4, author: '최**', date: '2026-05-15', text: '드레스 주름 표현이 예술입니다. 역시 믿고 사는 퀄리티!' }
    ]
  },
  {
    src: fig03,
    name: 'Moon Goddess',
    sub: '달의 여신 시리즈',
    label: 'HOT',
    stars: 4,
    reviews: [
      { id: 5, author: '정**', date: '2026-05-12', text: '분위기가 깡패입니다. 밤에 조명 켜두고 보면 진짜 달의 여신 같아요 🌙' },
      { id: 6, author: '강**', date: '2026-05-08', text: '배송이 조금 늦었지만 피규어를 보니 사르르 녹네요. 예쁩니다!' }
    ]
  },
  {
    src: fig04,
    name: 'Sunny Garden',
    sub: '치비 가든 시리즈',
    label: 'NEW',
    stars: 5,
    reviews: [
      { id: 7, author: '윤**', date: '2026-05-21', text: '너무 귀여워요ㅠㅠㅠ 책상 위에 올려두니 힐링 그 자체입니다 🌸' },
      { id: 8, author: '한**', date: '2026-05-17', text: '사이즈도 앙증맞고 도색도 깔끔합니다. 시리즈 다 모으고 싶네요.' }
    ]
  },
  {
    src: fig05,
    name: 'Cyber Hacker',
    sub: '사이버펑크 시리즈',
    label: 'SOLD OUT',
    stars: 4,
    reviews: [
      { id: 9, author: '송**', date: '2026-05-01', text: '품절되기 전에 막차 타서 다행입니다! 사이버펑크 느낌 제대로 나네요 🕶️' },
      { id: 10, author: '오**', date: '2026-04-28', text: '퀄리티는 좋은데 베이스 결합이 살짝 뻑뻑했어요. 그래도 전시해두니 멋집니다.' }
    ]
  },
];

/* 무한 루프를 위해 3번 복제 */
const row1 = [...figures, ...figures, ...figures];
const row2 = [...figures].reverse();
const row2Triple = [...row2, ...row2, ...row2];

/* 뱃지 CSS 클래스 매핑 */
const badgeClass = (label) => {
  const map = {
    NEW: 'new',
    LIMITED: 'limited',
    HOT: 'hot',
    'SOLD OUT': 'sold-out',
  };
  return `figure-card__badge--${map[label] ?? 'new'}`;
};

/* 별점 렌더 */
const Stars = ({ count }) => (
  <div className="figure-card__stars" aria-label={`${count}점`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="figure-card__star">
        {i < count ? '★' : '☆'}
      </span>
    ))}
  </div>
);

/* 카드 컴포넌트 */
const FigureCard = ({ fig, id, onClick }) => (
  <div className="figure-card" key={id} role="button" tabIndex={0} onClick={() => onClick(fig)} onKeyDown={(e) => e.key === 'Enter' && onClick(fig)} aria-label={`${fig.name} 후기 보기`}>
    <div className="figure-card__inner">
      <div className="figure-card__img-wrap">
        <img
          src={fig.src}
          alt={fig.name}
          className="figure-card__img"
          loading="lazy"
          draggable={false}
        />
        <span className={`figure-card__badge ${badgeClass(fig.label)}`}>
          {fig.label}
        </span>
      </div>
      <div className="figure-card__info">
        <p className="figure-card__name">{fig.name}</p>
        <p className="figure-card__sub">{fig.sub}</p>
        <Stars count={fig.stars} />
      </div>
    </div>
  </div>
);

/* 리뷰 모달 컴포넌트 */
const ReviewModal = ({ figure, onClose }) => {
  useEffect(() => {
    if (figure) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [figure]);

  if (!figure) return null;

  return createPortal(
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="review-modal-close" onClick={onClose} aria-label="닫기">
          &times;
        </button>
        
        <div className="review-modal-header">
          <div className="review-modal-header-img-wrap">
            <img src={figure.src} alt={figure.name} />
          </div>
          <div className="review-modal-header-info">
            <span className={`figure-card__badge ${badgeClass(figure.label)}`}>
              {figure.label}
            </span>
            <h3>{figure.name}</h3>
            <p>{figure.sub}</p>
            <div className="review-modal-stars">
              <Stars count={figure.stars} />
              <span>{figure.stars.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="review-modal-body">
          <h4 className="review-list-title">고객 후기 <span>({figure.reviews.length})</span></h4>
          <div className="review-list">
            {figure.reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-item-header">
                  <span className="review-author">{review.author}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-item-stars">
                  <Stars count={figure.stars} />
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

/* ─── 메인 컴포넌트 ─── */
export default function FigureCarousel() {
  const [selectedFigure, setSelectedFigure] = useState(null);

  return (
    <section
      className="figure-carousel-section"
      aria-label="피규어 컬렉션 쇼케이스"
    >
      {/* 헤더 */}
      <div className="carousel-header">
        <span className="carousel-eyebrow">
          ✦ &nbsp;Featured Collection
        </span>
      </div>

      {/* 첫 번째 줄 — 왼쪽으로 이동 */}
      <div className="carousel-track-wrapper">
        <div className="carousel-gradient carousel-gradient--left" />
        <div className="carousel-track carousel-track--left">
          {row1.map((fig, i) => (
            <FigureCard fig={fig} id={`row1-${i}`} key={`row1-${i}`} onClick={setSelectedFigure} />
          ))}
        </div>
        <div className="carousel-gradient carousel-gradient--right" />
      </div>

      {/* 두 번째 줄 — 오른쪽으로 이동 */}
      <div className="carousel-track-wrapper">
        <div className="carousel-gradient carousel-gradient--left" />
        <div className="carousel-track carousel-track--right">
          {row2Triple.map((fig, i) => (
            <FigureCard fig={fig} id={`row2-${i}`} key={`row2-${i}`} onClick={setSelectedFigure} />
          ))}
        </div>
        <div className="carousel-gradient carousel-gradient--right" />
      </div>

      {/* 리뷰 모달 */}
      <ReviewModal figure={selectedFigure} onClose={() => setSelectedFigure(null)} />
    </section>
  );
}

