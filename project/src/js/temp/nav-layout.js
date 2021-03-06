function navLayout() {
  const layout = document.createElement('div');
  const layoutBtn = document.createElement('button');
  const layoutNav = document.createElement('nav');

  layout.className = 'layout-navigation';
  layoutBtn.setAttribute('type', 'button');
  layoutBtn.innerText = 'Навигация по верстке';

  layoutNav.innerHTML = `
  <a href="components.html"><strong>Компоненты для всех страниц</strong></a>
  <ul>
    <li>
      <a href="index.html">Главная</a>
    </li>
    <li>
      <a href="#">Страница</a>
      <ul>
        <li>
          <a href="#">Внутренняя страница</a>
        </li>
      </ul>
    </li>
  </ul>
  `;

  document.body.append(layout);
  layout.append(layoutBtn);
  layout.append(layoutNav);

  layoutBtn.addEventListener('click', function () {
    layout.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  navLayout();
});
