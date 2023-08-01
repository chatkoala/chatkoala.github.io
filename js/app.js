const openOnAppBtn = document.querySelector(".open_app button");
openOnAppBtn.style.display = "none";

let opSystem = null;
const userAgent = window.navigator.userAgent;
let screen;

const getCurrentOpSystem = () => {
  if (/android/i.test(userAgent)) {
    opSystem = "Android";
  } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
    opSystem = "iOS";
  } else if (/windows phone/i.test(userAgent)) {
    opSystem = "Windows Phone";
  }
};

const handleDisplayOpenAppBtn = () => {
  const isAndroid = opSystem === "Android";
  const isSmallScreen = window.matchMedia("screen and (max-width: 991.98px)").matches();

  if (isAndroid && isSmallScreen) {
    openOnAppBtn.style.display = "block";
  } else {
    openOnAppBtn.style.display = "none";
  }
};

getCurrentOpSystem();
handleDisplayOpenAppBtn();
