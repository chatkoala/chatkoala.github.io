const openOnAppBtn = document.querySelector(".open_app button");
openOnAppBtn.style.display = "none";

let opSystem = null;
const userAgent = window.navigator.userAgent;
let screen;

const getCurrentOpSystem = () => {
  switch (true) {
    case /android/.test(userAgent):
      opSystem = "Android";
      break;

    case /iPad|iPhone|iPod/i.test(userAgent):
      opSystem = "iOS";
      break;

    case /window phone/i.test(userAgent):
      opSystem = "Window Phone";
      break;
  }
};

const handleDisplayOpenAppBtn = () => {
  if (
    opSystem === "Android" &&
    screen === window.matchMedia("screen and (max-width: 991.98px)")
  ) {
    return (openOnAppBtn.style.display = "block");
  } else {
    return (openOnAppBtn.style.display = "none");
  }
};

getCurrentOpSystem();

handleDisplayOpenAppBtn();
