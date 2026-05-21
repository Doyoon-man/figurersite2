import { useEffect, useRef } from 'react';

export default function CursorAurora() {
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    // 마우스 이동 시 좌표 업데이트
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // 모바일 터치 대응
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Easing 애니메이션 루프 (부드러운 지연 추적)
    const updateGlow = () => {
      const ease = 0.08; // 지연 속도 계수
      
      // glowPos가 mousePos를 향해 부드럽게 가속하며 수렴함
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * ease;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * ease;

      // CSS Variable 업데이트
      document.documentElement.style.setProperty('--cursor-glow-x', `${glowPos.current.x}px`);
      document.documentElement.style.setProperty('--cursor-glow-y', `${glowPos.current.y}px`);

      requestRef.current = requestAnimationFrame(updateGlow);
    };

    requestRef.current = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 이 컴포넌트는 실제 마크업을 그리지 않고 전역 CSS 변수와 백그라운드 레이어만 제어합니다.
  return <div className="cursor-aurora-bg" />;
}
