document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.getElementById('menuList');
  
    menuToggle.addEventListener('click', () => {
      const open = menuList.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  
    document.querySelectorAll('.has-submenu button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        const open = li.getAttribute('aria-expanded') === 'true';
        
        // đóng tất cả submenu
        document.querySelectorAll('.has-submenu').forEach(el => el.setAttribute('aria-expanded', 'false'));
        
        li.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  
    document.addEventListener('click', e => {
      if (!e.target.closest('.menu-container')) {
        menuList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.querySelectorAll('.has-submenu').forEach(el => el.setAttribute('aria-expanded', 'false'));
      }
    });
  });
  