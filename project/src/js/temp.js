function tempLayout() {
  const layout = document.createElement('div');
  const layoutBtn = document.createElement('button');
  const layoutNav = document.createElement('nav');
  const layoutStyle = document.createElement('style');

  layout.className = 'layout-navigation';
  layoutBtn.setAttribute('type', 'button');
  layoutBtn.innerText = 'Навигация по верстке';

  layoutNav.innerHTML = `
  <ul>
    <li>
      <a href="index.html">Главная</a>
    </li>
  </ul>
  `;

  document.head.append(layoutStyle);
  layoutStyle.append(`.layout-navigation{position:fixed;z-index:9;left:0;bottom:0;width:320px;transition:all .2s;transform:translateY(calc(100% - 40px))}@media only screen and (max-width: 767px){.layout-navigation{width:100%}}.layout-navigation.open{transform:translateY(0px)}.layout-navigation.open button::before{transform:rotateZ(-45deg)}.layout-navigation.open button::after{transform:rotateZ(45deg)}.layout-navigation button{position:relative;width:100%;height:40px;padding:10px 20px;font-size:14px;line-height:1.2;font-weight:600;color:#fff;background:#2b2b2b;border:1px solid #2b2b2b;border-bottom:0;text-align:left}.layout-navigation button::before{position:absolute;top:13px;right:32px;width:1px;height:10px;background:#fff;content:'';transform:rotateZ(45deg)}.layout-navigation button::after{position:absolute;top:13px;right:25px;width:1px;height:10px;background:#fff;content:'';transform:rotateZ(-45deg)}.layout-navigation nav{max-height:calc(100vh - 100px);min-height:calc(100vh - 100px);overflow-y:auto;padding:10px 20px;background:#f9f9f9;width:100%;border-left:1px solid #e8e9e8;border-right:1px solid #e8e9e8}.layout-navigation ul{margin:15px 0;padding:0 15px;list-style:decimal}.layout-navigation ul ul{list-style:disc}.layout-navigation li{margin-bottom:12px}.layout-navigation li:last-child{margin-bottom:0}.layout-navigation a{font-size:14px;line-height:1.2;font-weight:300;color:#000}.layout-navigation a:hover{color:#da1010;text-decoration:underline}`);

  document.body.append(layout);
  layout.append(layoutBtn);
  layout.append(layoutNav);

  layoutBtn.addEventListener('click', function () {
    layout.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  tempLayout();
});
