const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// ハンバーガーメニューがクリックされたら発火
burger.addEventListener('click', () => {
  // nav-linksにnav-acticeクラスを付与
  nav.classList.toggle("nav-active");

  // liタグを取り出して設定したアニメーションを付与 indexはメニューの表示速度を設定するのに必要なため取り出しておく
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      // すでにアニメーションが付与されていれば付与を外す
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`
    }
  });
  burger.classList.toggle("toggle");
}
)

