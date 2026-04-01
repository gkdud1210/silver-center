document.addEventListener('DOMContentLoaded', () => {

  // ===== 사업안내 탭 기능 =====
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabItems   = document.querySelectorAll('.tab-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabId = btn.dataset.tab;
      tabItems.forEach(item => item.classList.remove('active'));
      const target = document.getElementById(tabId);
      if (target) target.classList.add('active');
    });
  });

  // ===== 스크롤 등장 애니메이션 =====
  const scrollItems = document.querySelectorAll('.scroll-ani');
  if (scrollItems.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    scrollItems.forEach(item => observer.observe(item));
  }

  // ===== PC 하단 고정 상담 버튼 =====
  const fixedContact = document.querySelector('.fixed-contact');
  if (fixedContact) {
    window.addEventListener('scroll', () => {
      fixedContact.classList.toggle('show', window.scrollY > 200);
    }, { passive: true });
  }

  // ===== 모바일 하단 상담 바 =====
  const mobileContact = document.querySelector('.mobile-contact');
  if (mobileContact) {
    window.addEventListener('scroll', () => {
      mobileContact.classList.toggle('show', window.scrollY > 100);
    }, { passive: true });
  }

});
