const botaoMenu = document.querySelector('.menu-controle');
const linksMenu = document.querySelector('.links-topo');

if (botaoMenu && linksMenu) {
  botaoMenu.addEventListener('click', () => {
    const menuAberto = linksMenu.classList.toggle('visivel');
    botaoMenu.setAttribute('aria-expanded', String(menuAberto));
    botaoMenu.setAttribute('aria-label', menuAberto ? 'Fechar navegação' : 'Abrir navegação');
  });

  linksMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      linksMenu.classList.remove('visivel');
      botaoMenu.setAttribute('aria-expanded', 'false');
      botaoMenu.setAttribute('aria-label', 'Abrir navegação');
    });
  });
}
