function switchTab(btn, tabId) {
    document.querySelectorAll('.module-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.module-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }

  // Animate KPI cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.kpi-card, .feature-card, .price-card, .market-card').forEach(el => observer.observe(el));

  // Live clock in dashboard
  function updateClock() {
    const now = new Date();
    const utc = now.toISOString().replace('T', ' · ').substring(0, 22) + ' UTC';
    const el = document.querySelector('.status-indicators .status-dot:last-child');
    if (el) el.textContent = utc;
  }
  setInterval(updateClock, 1000);