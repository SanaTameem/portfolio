const Menu = document.querySelector('section.mobile-menu-container');
const MenuBtn = document.querySelector('a.hamburger');
const CloseBtn = document.querySelector('span.menu-icon');

MenuBtn.addEventListener('click', () => {
  Menu.classList.add('visible');
});

CloseBtn.addEventListener('click', () => {
  Menu.classList.remove('visible');
});
Menu.addEventListener('click', () => {
  Menu.classList.remove('visible');
});