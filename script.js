const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    navList.style.display = expanded ? 'none' : 'flex'; // Změna zobrazení
});
