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
};

getCurrentOpSystem();

window.addEventListener("resize", handleDisplayOpenAppBtn);
window.addEventListener("DOMContentLoaded", handleDisplayOpenAppBtn);

// modal

const privacyLink = document.getElementById("privacy-link");
const privacyModal = document.getElementById("privacy-modal");
const closeModal = document.getElementById("close-modal");

privacyLink.addEventListener("click", () => {
  privacyModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  privacyModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = "none";
  }
});
