document.addEventListener('DOMContentLoaded', () => {

  // ===== 스크롤 시 헤더 배경 변경 =====
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ===== 모바일 메뉴 토글 =====
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        nav.classList.remove('open');
      }
    });

    // 메뉴 링크 클릭 시 닫기
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // ===== 현재 페이지 active 처리 =====
  const current = location.pathname.split('/').pop() || 'index.html';
  const navLinks = {
    'index.html': 'home',
    'guide.html': 'about',
    'service.html': 'service',
    'review.html': 'review',
    'map.html': 'map'
  };
  const activeClass = navLinks[current] || 'home';
  document.querySelector(`.nav a.${activeClass}`)?.classList.add('active');

});
