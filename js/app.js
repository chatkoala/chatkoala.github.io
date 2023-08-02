const openOnAppBtn = document.querySelector(".open_app button");
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
    openOnAppBtn.style.display = "block";
  } else {
    openOnAppBtn.style.display = "none";
  }

  console.log(isSmallScreen, opSystem);
};
getCurrentOpSystem();
handleDisplayOpenAppBtn();
