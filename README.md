# 🌟 Dream Drawing — 자캐 맞춤형 프리미엄 피규어 제작 서비스

> **꿈의 드로잉, 현실이 되다.**  
> 내가 그린 세상에 단 하나뿐인 자작 캐릭터(자캐)가 프리미엄 3D 피규어로 탄생합니다.

---

## 📌 프로젝트 개요

`2figurersite`는 **Dream Drawing** 브랜드의 자캐(자작 캐릭터) 1:1 맞춤형 피규어 주문 제작 서비스를 소개하는 **랜딩 페이지**입니다.  
사용자의 2D 일러스트를 3D 피규어로 변환하는 제작 과정, 제품 라인업, 디테일 갤러리 등을 인터랙티브한 UI와 함께 제공합니다.

---

## ✨ 주요 기능 및 구성

| 섹션 | 설명 |
|------|------|
| **Hero** | 웨이브 타이핑 애니메이션 헤드라인, 일러스트 ↔ 피규어 호버 전환 이미지, CTA 버튼 |
| **Figure Carousel** | 무한 자동 스크롤 피규어 컨베이어 벨트 |
| **How It Works** | IntersectionObserver 기반 스크롤 트리거 3단계 제작 과정 타임라인 |
| **Line-Up** | 치비 / 프리미엄 LD 라인 50:50 호버 확장 스플릿 뷰 |
| **Details** | 크롭 줌 이미지 + 맥동 핫스팟 핀 + 글래스 툴팁 디테일 갤러리 |
| **Footer** | 예약 CTA, 주문 유의사항, 연락처, 브랜드 정보 |

### 🎨 인터랙션 & 디자인 특징

- **CursorAurora** — `requestAnimationFrame` 기반 Easing 지연 추적으로 마우스를 따라 흐르는 오로라 광채 배경 효과
- **글래스모피즘(Glassmorphism)** — 전역 `.glass-panel` 클래스를 활용한 통일된 반투명 카드 UI
- **Aurora 그라디언트** — CSS 변수(`--gradient-aurora`)로 전체 브랜드 컬러 일관성 유지
- **웨이브 타이핑** — 한 글자씩 분리된 `<span>` 기반의 캐릭터 레벨 애니메이션
- **IntersectionObserver** — 스크롤 진입/이탈에 반응하는 `.in-view` 클래스 토글

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

## 🛠 제작 공정

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

| 구분 | 기술 |
|------|------|
| 프레임워크 | [React 19](https://react.dev/) |
| 빌드 도구 | [Vite 8](https://vite.dev/) |
| 스타일링 | Vanilla CSS (CSS Variables, Glassmorphism) |
| 언어 | JavaScript (JSX) |
| 린터 | ESLint 10 + eslint-plugin-react-hooks |

---

## 📁 프로젝트 구조

```
2figurersite/
├── public/
│   ├── chibi.png              # 치비 라인 피규어 이미지
│   ├── premium.png            # 프리미엄 LD 라인 피규어 이미지
│   ├── prayelf-illust.jpg     # Hero 섹션 일러스트 (기본 상태)
│   └── prayelf-figure.jpg     # Hero 섹션 피규어 (호버 상태)
├── src/
│   ├── components/
│   │   ├── CursorAurora.jsx   # 마우스 Easing 오로라 궤적 효과
│   │   ├── Header.jsx/css     # 상단 고정 글래스모피즘 네비게이션
│   │   ├── Hero.jsx/css       # 히어로 섹션 + 웨이브 텍스트
│   │   ├── FigureCarousel.jsx/css  # 무한 피규어 컨베이어 캐러셀
│   │   ├── HowItWorks.jsx/css # 스크롤 연동 제작 과정 타임라인
│   │   ├── Lineup.jsx/css     # 50:50 스플릿 뷰 라인업 섹션
│   │   ├── Details.jsx/css    # 줌 디테일 + 핫스팟 갤러리 섹션
│   │   └── Footer.jsx/css     # CTA + 유의사항 + 브랜드 푸터
│   ├── App.jsx                # 루트 레이아웃 컴포넌트
│   ├── index.css              # 전역 디자인 시스템 (CSS Variables, 공통 클래스)
│   └── main.jsx               # React 엔트리포인트
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 로컬 개발 시작하기

### 사전 요구사항

- **Node.js** v18 이상
- **npm** v9 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone <repository-url>
cd 2figurersite

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행 (기본 포트: 5173)
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

### 기타 명령어

```bash
npm run build    # 프로덕션 빌드 (dist/ 폴더 생성)
npm run preview  # 빌드 결과물 로컬 미리보기
npm run lint     # ESLint 코드 검사
```

---

## 📞 고객 문의

| 채널 | 정보 |
|------|------|
| 이메일 | help@dreamdrawing.co.kr |
| 전화 | 1644-2026 (평일 10:00 - 18:00) |
| 카카오톡 | @꿈의드로잉_피규어 |

---

## ⚠️ 주문 제작 유의사항

- 본 제품은 1:1 개인 맞춤 **주문제작 상품**으로, **Phase 2(3D 모델링 확정 및 출력 시작 단계) 이후에는 취소 및 환불이 불가능**합니다.
- 2D 일러스트의 해상도가 지나치게 낮거나 입체 해석이 불분명할 경우, 담당 아트 디렉터가 1:1 상담을 통해 조율해 드립니다.
- 평균 제작 기간은 모델링 컨펌 후 **영업일 기준 15일 ~ 20일**이 소요되며, 작업 난이도 및 조형 파츠 개수에 따라 일정이 일부 연장될 수 있습니다.

---

© 2026 DREAM DRAWING Co., Ltd. All Rights Reserved.
