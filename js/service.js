document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabItems = document.querySelectorAll('.tab-item');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 버튼 active
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabId = btn.dataset.tab;

      // 콘텐츠 active
      tabItems.forEach(item => item.classList.remove('active'));
      document.getElementById(tabId)?.classList.add('active');
    });
  });
});
