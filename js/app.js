const openOnAppBtn = document.querySelector(".open_app");
const closeBannerBtn = document.querySelector(".close_banner");
openOnAppBtn.style.display = "none";

let opSystem = null;
const userAgent = navigator.userAgent || window.opera;
let screen;

const getCurrentOpSystem = () => {
  if (/windows phone/i.test(userAgent)) {
    return (opSystem = "Windows Phone");
  }

  if (/android/i.test(userAgent)) {
    return (opSystem = "Android");
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return (opSystem = "iOS");
  }

  return "unknown";
};

const handleDisplayOpenAppBtn = () => {
  const isAndroid = opSystem === "Android";
  const isSmallScreen = window.matchMedia("screen and (max-width: 991.98px)").matches;

  if (isAndroid && isSmallScreen) {
    openOnAppBtn.style.display = "flex";
  } else {
    openOnAppBtn.style.display = "none";
  }
};

getCurrentOpSystem();

window.addEventListener("resize", handleDisplayOpenAppBtn);
window.addEventListener("DOMContentLoaded", handleDisplayOpenAppBtn);

closeBannerBtn.addEventListener("click", () => {
  openOnAppBtn.style.display = "none";
});

// language

const langButtons = document.querySelectorAll(".lang_wrapper button");

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "en") {
      window.location.href = "en.html";
    } else {
      window.location.href = "index.html";
    }
  });
});
