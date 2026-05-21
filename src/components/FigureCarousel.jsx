import './FigureCarousel.css';
import fig01 from '../assets/figures/figure-01.jpg';
import fig02 from '../assets/figures/figure-02.jpg';
import fig03 from '../assets/figures/figure-03.jpg';
import fig04 from '../assets/figures/figure-04.jpg';
import fig05 from '../assets/figures/figure-05.jpg';

/* ─── 피규어 데이터 ─── */
const figures = [
  {
    src: fig01,
    name: 'Divine Divinity',
    sub: '신성 여신 시리즈',
    label: 'NEW',
    stars: 5,
  },
  {
    src: fig02,
    name: 'Rose Princess',
    sub: '로즈 프린세스 시리즈',
    label: 'LIMITED',
    stars: 5,
  },
  {
    src: fig03,
    name: 'Moon Goddess',
    sub: '달의 여신 시리즈',
    label: 'HOT',
    stars: 4,
  },
  {
    src: fig04,
    name: 'Sunny Garden',
    sub: '치비 가든 시리즈',
    label: 'NEW',
    stars: 5,
  },
  {
    src: fig05,
    name: 'Cyber Hacker',
    sub: '사이버펑크 시리즈',
    label: 'SOLD OUT',
    stars: 4,
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
const FigureCard = ({ fig, id }) => (
  <div className="figure-card" key={id} role="img" aria-label={fig.name}>
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

/* ─── 메인 컴포넌트 ─── */
export default function FigureCarousel() {
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
            <FigureCard fig={fig} id={`row1-${i}`} key={`row1-${i}`} />
          ))}
        </div>
        <div className="carousel-gradient carousel-gradient--right" />
      </div>

      {/* 두 번째 줄 — 오른쪽으로 이동 */}
      <div className="carousel-track-wrapper">
        <div className="carousel-gradient carousel-gradient--left" />
        <div className="carousel-track carousel-track--right">
          {row2Triple.map((fig, i) => (
            <FigureCard fig={fig} id={`row2-${i}`} key={`row2-${i}`} />
          ))}
        </div>
        <div className="carousel-gradient carousel-gradient--right" />
      </div>
    </section>
  );
}
