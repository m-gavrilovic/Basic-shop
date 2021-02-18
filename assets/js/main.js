$(document).ready(function () {
  displayNav();
  aboutParagraph();
  swapProducts();
  printFigures();
  displayOffer();
  displayFooterNav();
  AOS.init();
});

function imeCheck() {
  var nameReg = /^[A-ZŠŽĐĆČ]{1}[a-zšžđćč]{1,}$/;

  var ime = document.getElementById("ime").value;
  var imeStyle = document.getElementById("ime");
  if (!nameReg.test(ime) || ime.length < 1) {
    imeStyle.classList.remove("form-control");
    imeStyle.classList.add("regfail");
  } else {
    imeStyle.classList.remove("regfail");
    imeStyle.classList.add("form-control");
  }
}

function prezCheck() {
  var nameReg = /^[A-ZŠŽĐĆČ]{1}[a-zšžđćč]{2,}$/;

  var prezime = document.getElementById("prezime").value;
  var prezimeStyle = document.getElementById("prezime");
  if (!nameReg.test(prezime) || prezime.length < 2) {
    prezimeStyle.classList.remove("form-control");
    prezimeStyle.classList.add("regfail");
  } else {
    prezimeStyle.classList.remove("regfail");
    prezimeStyle.classList.add("form-control");
  }
}

function emailCheck() {
  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var email = document.getElementById("email").value;
  var emailStyle = document.getElementById("email");
  if (!emailReg.test(email) || email.length < 5) {
    emailStyle.classList.remove("form-control");
    emailStyle.classList.add("regfail");
  } else {
    emailStyle.classList.remove("regfail");
    emailStyle.classList.add("form-control");
  }
}

function treaCheck() {
  var textReg = /[A-zŠšŽžĐđĆćČč\s,0-9\.\?\\\/;\()\n\!]{0,300}/;

  var textTrea = document.getElementById("questions").value;
  var textTreaStyle = document.getElementById("questions");
  if (!textReg.test(textTrea) && textTrea.length > 0) {
    textTreaStyle.classList.remove("form-control");
    textTreaStyle.classList.add("regfail");
  } else {
    textTreaStyle.classList.remove("regfail");
    textTreaStyle.classList.add("form-control");
  }
}

function valid() {
  let emailStyle = $("#email");
  let textTrea = $("#questions");
  let prezime = $("#prezime");
  let ime = $("#ime");
  treaCheck();
  imeCheck();
  prezCheck();
  emailCheck();

  if (
    emailStyle.hasClass("regfail") ||
    textTrea.hasClass("regfail") ||
    prezime.hasClass("regfail") ||
    ime.hasClass("regfail")
  ) {
    alert("Invalid contact information, please try again!");
  } else alert("You've sent an e-mail. Thank you for your time!");
}

function displayNav() {
  var headerNav = document.querySelector("#nav");
  headerNav.innerHTML = "";
  var navElements = ["Home", "About", "Products", "Contact"];
  var hrefs = [
    "index.html#nav-top",
    "index.html#aboutUs",
    "index.html#mainBlock",
    "index.html#contact",
  ];
  for (i = 0; i < navElements.length; i++) {
    headerNav.innerHTML += `<li class="nav-item ml-1 pt-3 text-uppercase">
    <a class="nav-link" href="${hrefs[i]}">${navElements[i]}</a>
</li>`;
  }
}

function swapProducts() {
  var buttonSwap = document.querySelector(".swapButton");
  buttonSwap.innerHTML = "";
  var swapElements = ["Figures", "Hoodies", "Shirts"];
  var elementFunctions = ["printFigures()", "printHoodies()", "printShirts()"];

  for (i = 0; i < swapElements.length; i++) {
    buttonSwap.innerHTML += `<button id='${swapElements[i]}' class='col-sm-12 col-md-4 col-lg-4 p-4 btn btn-light' onclick='${elementFunctions[i]}'>${swapElements[i]}</button>`;
  }
  let figureElement = document.getElementById("Figures");
  figureElement.classList.add("active");
  let hoodieElement = document.getElementById("Hoodies");
  let shirtsElement = document.getElementById("Shirts");
  figureElement.addEventListener("click", function () {
    figureElement.classList.add("active");
    hoodieElement.classList.remove("active");
    shirtsElement.classList.remove("active");
  });
  hoodieElement.addEventListener("click", function () {
    figureElement.classList.remove("active");
    hoodieElement.classList.add("active");
    shirtsElement.classList.remove("active");
  });
  shirtsElement.addEventListener("click", function () {
    figureElement.classList.remove("active");
    hoodieElement.classList.remove("active");
    shirtsElement.classList.add("active");
  });
}

function printFigures() {
  var products = document.querySelector(".best-sales");
  products.innerHTML = "";
  var productsElements = [
    "figure1",
    "figure2",
    "figure3",
    "figure7",
    "figure8",
    "figure9",
  ];
  var model = [
    "Dunkmaster Darius",
    "Twisted Fate Classic",
    "Star Guardian Zoe",
    "DJ Sona",
    "Yassuo Classic",
    "Pizza Delivery Sivir",
  ];
  var price = [65, 50, 60, 65, 50, 55];
  for (i = 0; i < productsElements.length; i++) {
    products.innerHTML += `<div class="col-sm-6 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div class="block-4 text-center karticaFigure border">
        <figure class="block-4-image m-0">
        <img src="assets/images/figures/${productsElements[i]}.png" alt="${productsElements[i]}" class="img-fluid">
        </figure>
        <div class="block-4-text ">
        
        <h2 class="text-uppercase mb-2 font-weight-bold">Riot</h2>
        <h3 class='mb-4'>${model[i]}</h3>
        <h3 class='mb-4'>Price: <span class='price'>${price[i]}$</span></h3>
        </div>
    </div>
</div>`;
  }
}

function printHoodies() {
  var products = document.querySelector(".best-sales");
  products.innerHTML = "";
  var productsElements = [
    "hoodie1",
    "hoodie2",
    "hoodie3",
    "hoodie4",
    "hoodie5",
    "hoodie6",
  ];
  var model = [
    "Thresh Hook",
    "Inside Every Gnar",
    "Corki Flyer",
    "Arcade Pullover",
    "Darius 'Dunked'",
    "GG WP",
  ];
  var price = [90, 75, 75, 70, 80, 80];
  for (i = 0; i < productsElements.length; i++) {
    products.innerHTML += `<div class="col-sm-6 col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div class="block-4 text-center karticaFigure border">
        <figure class="block-4-image m-0">
        <img src="assets/images/hoodies/${productsElements[i]}.png" alt="${productsElements[i]}" class="img-fluid">
        </figure>
        <div class="block-4-text ">
        
        <h2 class="text-uppercase mb-2 font-weight-bold">Riot</h2>
        <h3 class='mb-4'>${model[i]}</h3>
        <h3 class='mb-4'>Price: <span class='price'>${price[i]}$</span></h3>
        </div>
    </div>
</div>`;
  }
}

function printShirts() {
  var products = document.querySelector(".best-sales");
  products.innerHTML = "";
  var productsElements = [
    "shirt1",
    "shirt2",
    "shirt3",
    "shirt4",
    "shirt5",
    "shirt6",
  ];
  var model = [
    "Dunkmaster Jersey",
    "PROJECT: Katarina",
    "True Damage Ekko",
    "Blitzcrank Hook City",
    "Minion 'Deal With It' Tee",
    "Jinx 'BYE BYE' Tee",
  ];
  var price = [70, 60, 65, 70, 60, 70];
  for (i = 0; i < productsElements.length; i++) {
    products.innerHTML += `<div class="col-sm-6 col-md-6 col-lg-4 mb-4 aos-init aos-animate " data-aos="fade-up">
      <div class="block-4 text-center karticaFigure border">
          <figure class="block-4-image m-0">
          <img src="assets/images/shirts/${productsElements[i]}.png" alt="${productsElements[i]}" class="img-fluid">
          </figure>
          <div class="block-4-text ">
          
          <h2 class="text-uppercase mb-2 font-weight-bold">Riot</h2>
          <h3 class='mb-4'>${model[i]}</h3>
          <h3 class='mb-4'>Price: <span class='price'>${price[i]}$</span></h3>
          </div>
      </div>
  </div>`;
  }
}

$(".single-item").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2500,
  zIndex: 0,
  dots: true,
  arrows: true,
});
function aboutParagraph() {
  let para = $(".hidden");
  let showButton = $("#showMore");
  let hideButton = $("#hide");
  showButton.click(function () {
    para.slideDown(500);
    showButton.slideUp(600);
    hideButton.slideDown(600);
    hideButton.css("display", "inline-block");
    para.css("visibility", "visible");
  });
  hideButton.click(function () {
    para.slideUp(500);
    showButton.slideDown(600);
    hideButton.slideUp(600);
    para.css("visibility", "hidden");
  });
}

function displayOffer() {
  let ele = $(".offerSec");
  ele.html("");
  let html = "";
  let offerVal = [
    "Delivery all across the world!",
    "Top quality products, guaranteed!",
    "Affordable to everyone, even non League fans!",
    "Great staff and service support!",
  ];
  let offerIcons = [
    "fas fa-truck",
    "fas fa-check-square",
    "fas fa-dollar-sign",
    "fas fa-users",
  ];
  let animateFrom = [
    "fade-down-right",
    "fade-down-right",
    "fade-down-left",
    "fade-down-left",
  ];
  for (i = 0; i < offerVal.length; i++) {
    html += `<div class="col-lg-3 col-md3" data-aos="${animateFrom[i]}" data-aos-duration="1000" data-aos-offset="200" >
    <div class="card" >
      <i class="${offerIcons[i]}"></i>
      <div class="card-body">
        <p class="card-text text-center">${offerVal[i]}</p>
      </div>
    </div>
  </div>`;
  }
  ele.html(html);
}

function displayFooterNav() {
  let linksClass = $(".footerLinks");
  let footerLinks = ["Docs", "Author", "Sitemap"];
  let linkTo = ["docs.pdf", "author.html", "sitemap.xml"];
  let html = "";
  for (i = 0; i < footerLinks.length; i++) {
    html += `<h3><a href="${linkTo[i]}" target="_blank">${footerLinks[i]}</a></h3>`;
  }
  linksClass.html(html);
}
