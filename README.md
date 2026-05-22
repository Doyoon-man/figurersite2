<![CDATA[<div align="center">

# ✦ Dream Drawing

**꿈의 드로잉, 현실이 되다.**

내가 그린 세상에 단 하나뿐인 자작 캐릭터(자캐)가  
프리미엄 3D 피규어로 탄생합니다.

[![Deploy to GitHub Pages](https://github.com/Doyoon-man/figurersite2/actions/workflows/deploy.yml/badge.svg)](https://github.com/Doyoon-man/figurersite2/actions/workflows/deploy.yml)
&nbsp;&nbsp;
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-Private-lightgrey)

[🔗 Live Demo](https://Doyoon-man.github.io/figurersite2/)

</div>

---

## 📌 프로젝트 소개

**figurersite2**는 자캐(자작 캐릭터) 1:1 맞춤형 프리미엄 피규어 주문 제작 서비스 **Dream Drawing**의 공식 랜딩 페이지입니다.

사용자의 2D 일러스트를 3D 피규어로 변환하는 전 과정을 소개하며, 오로라 글래스모피즘 디자인과 풍부한 인터랙션을 통해 프리미엄 브랜드 경험을 전달합니다.

---

## ✨ 페이지 구성 & 핵심 기능

| # | 섹션 | 컴포넌트 | 설명 |
|:-:|------|----------|------|
| 1 | **Header** | `Header.jsx` | 스크롤 감지 글래스모피즘 상단 고정 네비게이션 + CTA 숏컷 |
| 2 | **Hero** | `Hero.jsx` | 웨이브 타이핑 헤드라인, 일러스트 ↔ 피규어 호버 전환 이미지, 오로라 CTA 버튼 |
| 3 | **Figure Carousel** | `FigureCarousel.jsx` | 양방향 무한 자동 스크롤 피규어 쇼케이스 컨베이어 + 클릭 시 리뷰 모달 |
| 4 | **How It Works** | `HowItWorks.jsx` | IntersectionObserver 기반 스크롤 트리거 3단계 제작 과정 타임라인 |
| 5 | **Line-Up** | `Lineup.jsx` | 치비 / 프리미엄 LD 라인 50:50 호버 확장 스플릿 뷰 |
| 6 | **Details** | `Details.jsx` | 크롭 줌 이미지 + 맥동 핫스팟 핀 + 글래스 툴팁 디테일 갤러리 |
| 7 | **Footer** | `Footer.jsx` | 예약 CTA, 주문 유의사항, 연락처, 브랜드 정보 |
| — | **Cursor Aurora** | `CursorAurora.jsx` | `requestAnimationFrame` Easing 기반 마우스 추적 오로라 광채 배경 |

---

## 🎨 디자인 시스템

### 컬러 팔레트

| 토큰 | 값 | 용도 |
|------|----|------|
| `--color-bg-pure` | `#FFFFFF` | 페이지 배경 (퓨어 화이트) |
| `--color-lavender-light` | `#F6F4FD` | 서브 배경 |
| `--color-lavender-deep` | `#8E7CEF` | 포인트 컬러 |
| `--color-navy-deep` | `#0D1127` | 헤드라인 텍스트 |
| `--color-navy-mute` | `#4B5373` | 본문 텍스트 |
| `--gradient-aurora` | `#FF9ECA → #B8A6FF → #7CE2FF` | 브랜드 오로라 그라디언트 |

### 타이포그래피

| 용도 | 폰트 | 비고 |
|------|-------|------|
| 본문 | **Pretendard** | 한글 시스템 UI 폰트 |
| 디스플레이 | **Outfit** | 영문 헤드라인 |
| 한글 헤드라인 | **yg-jalnan (잘난체)** | 임팩트 있는 타이틀 |
| 서브텍스트 | **KoPubWorld돋움** | 보조 텍스트 |

### 인터랙션 & 모션

- **CursorAurora** — `requestAnimationFrame` + Easing 지연 추적으로 마우스를 따라 흐르는 오로라 광채 배경 효과
- **글래스모피즘(Glassmorphism)** — 전역 `.glass-panel` 클래스로 통일된 반투명 `backdrop-filter: blur(16px)` 카드 UI
- **웨이브 타이핑** — 한 글자씩 `<span>` 분리 후 `animationDelay`로 순차 출현하는 캐릭터 레벨 애니메이션
- **IntersectionObserver** — 스크롤 진입/이탈에 반응하는 `.in-view` 클래스 토글 (How It Works 타임라인)
- **무한 컨베이어 캐러셀** — 데이터 3배 복제 + CSS `@keyframes` 무한 루프 슬라이딩
- **리뷰 모달** — `createPortal` 기반 전체 화면 오버레이 모달 (별점 + 고객 후기)
- **50:50 스플릿 뷰** — 마우스 진입 시 해당 슬롯 확장 + 반대 슬롯 축소 인터랙션
- **핫스팟 핀** — CSS 맥동 `pulse-ring` 애니메이션 + 호버 시 글래스 툴팁 말풍선

---

## 📦 제품 라인업

### 치비 미니어처 라인 `Cute & Compact`
- 2.5등신 아기자기한 비율 / 높이 약 8 ~ 10cm
- 프리미엄 무광 코팅 레진 소재
- **180,000원~**

### 7등신 프리미엄 LD 라인 `Elegant & Sophisticated`
- 신체 비율·의상·머리칼까지 극정밀 묘사 / 높이 약 22 ~ 25cm (1/7 스케일)
- 반투명 오로라 레진 & 유무광 혼합 마감 + 투명 아크릴 케이스 기본 제공
- **300,000원~**

---

## 🛠 제작 공정 (3단계)

```
STAGE 01  원화 접수 & 컨셉 분석
          └─ 2D 일러스트·설정 시트 접수 → 아트 디렉터 정밀 분석 → 설계도 작성

STAGE 02  3D 뼈대 및 프리미엄 모델링
          └─ 아이소메트릭 비율 3D 디지털 모델링 → 360도 가상 피드백 제공

STAGE 03  정밀 출력, 핸드페인팅 & 완성
          └─ SLA 3D 프린터 출력 → 핸드페인팅 → 안전 포장 배송
```

---

## 🏗 기술 스택

| 구분 | 기술 | 버전 |
|------|------|:----:|
| 프레임워크 | [React](https://react.dev/) | 19.x |
| 빌드 도구 | [Vite](https://vite.dev/) | 8.x |
| 스타일링 | Vanilla CSS (CSS Variables, Glassmorphism, `@keyframes`) | — |
| 언어 | JavaScript (JSX) | ES2022+ |
| 린터 | ESLint + eslint-plugin-react-hooks + eslint-plugin-react-refresh | 10.x |
| 배포 | GitHub Pages (GitHub Actions CI/CD) | — |

---

## 📁 프로젝트 구조

```
figurersite2/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages 자동 배포 워크플로우
├── src/
│   ├── assets/
│   │   └── figures/
│   │       ├── hero.png             # 브랜드 로고 아이콘
│   │       ├── favicon.svg          # 파비콘
│   │       ├── icons.svg            # 공용 아이콘 스프라이트
│   │       ├── prayelf-illust.*     # Hero 일러스트 (기본 상태)
│   │       ├── prayelf-figure.*     # Hero 피규어 (호버 상태)
│   │       ├── chibi.png            # 치비 라인 피규어 이미지
│   │       ├── premium.png          # 프리미엄 LD 라인 피규어 이미지
│   │       ├── figure-01~05.jpg     # 캐러셀 피규어 갤러리 이미지 (5종)
│   │       └── purple_sparkle.jpg   # 장식용 배경 스파클 이미지
│   ├── components/
│   │   ├── CursorAurora.jsx         # 마우스 Easing 오로라 궤적 효과 (마크업 없음, CSS 변수 제어)
│   │   ├── Header.jsx / .css        # 스크롤 감지 글래스모피즘 네비게이션
│   │   ├── Hero.jsx / .css          # 웨이브 타이핑 + 이미지 호버 + CTA 히어로
│   │   ├── FigureCarousel.jsx / .css# 양방향 무한 캐러셀 + 리뷰 모달 (createPortal)
│   │   ├── HowItWorks.jsx / .css    # IntersectionObserver 타임라인 + 부유 구체
│   │   ├── Lineup.jsx / .css        # 50:50 스플릿 뷰 라인업
│   │   ├── Details.jsx / .css       # 크롭 줌 + 핫스팟 핀 + 글래스 툴팁
│   │   └── Footer.jsx / .css        # CTA + 유의사항 + 브랜드 정보 + 저작권
│   ├── App.jsx                      # 루트 레이아웃 (전체 섹션 조합)
│   ├── App.css                      # App 전용 스타일
│   ├── index.css                    # 전역 디자인 시스템 (CSS Variables, 유틸리티)
│   └── main.jsx                     # React 엔트리포인트
├── index.html                       # HTML 엔트리 (SEO 메타태그, OG 태그 포함)
├── vite.config.js                   # Vite 설정 (base: '/figurersite2/')
├── eslint.config.js                 # ESLint 설정
└── package.json                     # 프로젝트 메타 및 의존성
```

---

## 🚀 로컬 개발 시작하기

### 사전 요구사항

- **Node.js** v18 이상
- **npm** v9 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/Doyoon-man/figurersite2.git
cd figurersite2

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행 (기본 포트: 5173)
npm run dev
```

브라우저에서 `http://localhost:5173/figurersite2/` 으로 접속하세요.

### 기타 명령어

```bash
npm run build     # 프로덕션 빌드 → dist/ 폴더 생성
npm run preview   # 빌드 결과물 로컬 미리보기
npm run lint      # ESLint 코드 검사
npm run deploy    # gh-pages를 통한 수동 배포 (기본은 GitHub Actions 자동 배포)
```

---

## 🌐 배포 (GitHub Pages)

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml` 워크플로우가 자동으로 실행됩니다.

```
Push to main → npm ci → npm run build → Upload dist/ → Deploy to GitHub Pages
```

라이브 URL: **https://Doyoon-man.github.io/figurersite2/**

---

## 🔍 SEO & 접근성

- `<html lang="ko">` 한국어 문서 명시
- `<title>`, `<meta description>` 설정 완료
- Open Graph (`og:title`, `og:description`, `og:type`) 메타태그 적용
- `theme-color` 메타태그 (`#1a0a35`)
- 시맨틱 HTML5 (`<header>`, `<section>`, `<footer>`, `<nav>`)
- ARIA 레이블 (`aria-label` 캐러셀, 버튼)
- 이미지 `alt` 속성 전수 적용
- `loading="lazy"` 이미지 지연 로딩

---

## 📞 고객 문의

| 채널 | 정보 |
|------|------|
| 📧 이메일 | help@dreamdrawing.co.kr |
| 📞 전화 | 1644-2026 (평일 10:00 - 18:00) |
| 💬 카카오톡 | @꿈의드로잉_피규어 |

---

## ⚠️ 주문 제작 유의사항

1. 본 제품은 1:1 개인 맞춤 **주문제작 상품**으로, **Phase 2(3D 모델링 확정 및 출력 시작 단계) 이후에는 취소 및 환불이 불가능**합니다.
2. 2D 일러스트의 해상도가 지나치게 낮거나 입체 해석이 불분명할 경우, 담당 아트 디렉터가 1:1 상담을 통해 조율해 드립니다.
3. 평균 제작 기간은 모델링 컨펌 후 **영업일 기준 15일 ~ 20일**이 소요되며, 작업 난이도 및 조형 파츠 개수에 따라 일정이 일부 연장될 수 있습니다.

---

<div align="center">

**© 2026 DREAM DRAWING Co., Ltd. All Rights Reserved.**

*상상 속의 세계를 현실로 해방합니다.*

</div>
]]>
