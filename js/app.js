const openOnAppBtn = document.querySelector(".open_app button");

openOnAppBtn.addEventListener("click", () => {
  let opSystem = null;
  const userAgent = window.navigator.userAgent;

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

  if (opSystem === "Android") {
    return (openOnAppBtn.style.display = "block");
  } else {
    return (openOnAppBtn.style.display = "none");
  }
});
