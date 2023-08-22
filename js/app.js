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
const termsLink = document.getElementById("terms-link");
const privacyModal = document.getElementById("privacy-modal");
const termsModal = document.getElementById("terms-modal");
const closeModal = document.querySelectorAll(".close-modal");

const linkBtns = [privacyLink, termsLink];
const closeIcons = closeModal;

linkBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const { value } = e.target;

    if (value === "privacy") {
      privacyModal.style.display = "flex";
    } else {
      termsModal.style.display = "flex";
    }
  });
});

closeIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const { value } = e.target;

    if (value === "privacy-close") {
      privacyModal.style.display = "none";
    } else {
      termsModal.style.display = "none";
    }
  });
});

window.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = "none";
  } else if (event.target === termsModal) {
    termsModal.style.display = "none";
  }
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
