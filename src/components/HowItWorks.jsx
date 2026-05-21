import { useEffect, useRef } from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // 화면 하단 80px 이전에 진입 시 동작
      threshold: 0.15
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 스크롤 내릴 때: 나타남
          entry.target.classList.add('in-view');
        } else {
          // 스크롤 올릴 때: 사라짐
          entry.target.classList.remove('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const steps = sectionRef.current.querySelectorAll('.step-card-wrapper');
    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  const stepsData = [
    {
      num: '01',
      title: '원화 접수 & 컨셉 분석',
      desc: '당신의 소중한 자작 캐릭터가 담긴 2D 일러스트, 설정 시트, 혹은 컨셉 아트를 접수합니다. 전문 아트 디렉터가 캐릭터의 성격, 옷자락의 펄럭임, 보이지 않는 뒷모습까지 정밀하게 분석하여 설계도를 작성합니다.',
      sub: '✓ 컨셉 디자인, 2D 원화를 바탕으로 제작 가능  ✓ 캐릭터 컨셉트 완벽 보존'
    },
    {
      num: '02',
      title: '3D 뼈대 및 프리미엄 모델링',
      desc: '2D 원화를 아이소메트릭 비율의 3D 디지털 모델링으로 완벽 구현합니다. 피규어 특유의 역동적인 포즈와 표정 디테일, 장신구의 입체 질감을 살려 360도 검수가 가능한 고화질 뷰어를 제공합니다.',
      sub: '✓ 중간 단계 360도 가상 피드백 제공  ✓ 1:1 맞춤형 비율 커스터마이징'
    },
    {
      num: '03',
      title: '정밀 출력, 핸드페인팅 & 완성',
      desc: 'SLA 3D 프린터를 사용하여 고품질 피규어를 출력합니다. 섬세한 핸드페인팅을 거쳐 완성된 프리미엄 피규어를 안전하게 배송해드립니다.',
      sub: '✓ 고품질 레진 소재 사용  ✓ 정교한 핸드 페인팅 마감'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works" ref={sectionRef}>

      {/* 백그라운드 3D 기하 구체 (글래스 카드 밑에서 비쳐 보이는 공간감 생성) */}
      <div className="floating-sphere sphere-1"></div>
      <div className="floating-sphere sphere-2"></div>
      <div className="floating-sphere sphere-3"></div>

      <div className="how-container">

        {/* 섹션 타이틀 */}
        <div className="section-header">
          <span className="section-subtitle">Crafting Process</span>
          <h2 className="title-jalnan section-main-title">
            자캐가 현실로 다가오는 <br />
            <span className="gradient-text">세 가지 마법 같은 과정</span>
          </h2>
          <p className="section-description">
            정교함과 감성을 담아 꿈이 담긴 당신의 캐릭터를 영원히 소장하고 싶은 프리미엄 실물 피규어로 빚어냅니다.
          </p>
        </div>

        {/* 세로 타임라인/스텝핑 레이아웃 */}
        <div className="timeline-stepping">
          <div className="timeline-bar">
            <div className="timeline-fill"></div>
          </div>

          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="step-card-wrapper"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >

              {/* 스텝 카운터 원 */}
              <div className="step-indicator">
                <span className="step-num-bubble">{step.num}</span>
              </div>

              {/* 글래스모피즘 정보 카드 */}
              <div className="step-glass-card glass-panel">
                <div className="step-meta">
                  <span className="step-label">STAGE {step.num}</span>
                </div>
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.desc}</p>
                <div className="step-card-divider"></div>
                <p className="step-card-sub">{step.sub}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
