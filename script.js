const emailForm = document.getElementById("emailForm");
const emailResponse = document.getElementById("emailResponse");
const emailSubject = document.getElementById("emailSubject");

const happySound = document.getElementById("happySound");
const sadSound = document.getElementById("sadSound");

document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const resetBtn = document.getElementById("resetBtn");
  const questionElement = document.querySelector(".question");
  const buttonsContainer = document.querySelector(".buttons");
  const resultContainer = document.querySelector(".result-container");
  const animationContainer = document.getElementById("animationContainer");
  const resultMessage = document.getElementById("resultMessage");
  const happySound = document.getElementById("happySound");
  const sadSound = document.getElementById("sadSound");
  const phoneIcon = document.querySelector(".phone-icon");

  yesBtn.addEventListener("click", function () {
    /* emailResponse.value = "Yes";
    emailSubject.value = "✅ User wants to be called!";

    emailForm.submit(); */
    playHappySound();
    showHappyResult();
  });

  noBtn.addEventListener("click", function () {
   /*  emailResponse.value = "No";
    emailSubject.value = "❌ User doesn't want to be called";

    emailForm.submit(); */
    playSadSound();
    showSadResult();
  });
  resetBtn.addEventListener("click", resetApp);

  function playHappySound() {
    happySound.currentTime = 0; 
    happySound.play().catch((e) => console.log("Audio play failed:", e));
  }

  function playSadSound() {
    sadSound.currentTime = 0; 
    sadSound.play().catch((e) => console.log("Audio play failed:", e));
  }
  function showHappyResult() {
    happySound.play();

    buttonsContainer.classList.add("hidden");
    questionElement.classList.add("hidden");
    phoneIcon.classList.add("hidden");

    animationContainer.innerHTML = "";
    createHappyFace();

    resultMessage.textContent = "Great! I will call you soon!";
    resultMessage.style.color = "#2ecc71";

    createConfetti();

    resultContainer.classList.remove("hidden");
  }

  function showSadResult() {
    sadSound.play();

    buttonsContainer.classList.add("hidden");
    questionElement.classList.add("hidden");
    phoneIcon.classList.add("hidden");

    animationContainer.innerHTML = "";
    createSadFace();

    resultMessage.textContent = "Okay, maybe another time...";
    resultMessage.style.color = "#e74c3c";

    resultContainer.classList.remove("hidden");
  }

  function resetApp() {
    happySound.pause();
    happySound.currentTime = 0;
    sadSound.pause();
    sadSound.currentTime = 0;

    buttonsContainer.classList.remove("hidden");
    questionElement.classList.remove("hidden");
    phoneIcon.classList.remove("hidden");

    resultContainer.classList.add("hidden");
  }

  function createHappyFace() {
    const happyFace = document.createElement("div");
    happyFace.className = "happy-face";

    const eyeLeft = document.createElement("div");
    eyeLeft.className = "happy-eyes happy-eye-left";

    const eyeRight = document.createElement("div");
    eyeRight.className = "happy-eyes happy-eye-right";

    const mouth = document.createElement("div");
    mouth.className = "happy-mouth";

    happyFace.appendChild(eyeLeft);
    happyFace.appendChild(eyeRight);
    happyFace.appendChild(mouth);

    animationContainer.appendChild(happyFace);
  }

  function createSadFace() {
    const sadFace = document.createElement("div");
    sadFace.className = "sad-face";

    const eyeLeft = document.createElement("div");
    eyeLeft.className = "sad-eyes sad-eye-left";

    const eyeRight = document.createElement("div");
    eyeRight.className = "sad-eyes sad-eye-right";

    const mouth = document.createElement("div");
    mouth.className = "sad-mouth";

    sadFace.appendChild(eyeLeft);
    sadFace.appendChild(eyeRight);
    sadFace.appendChild(mouth);

    animationContainer.appendChild(sadFace);
  }

  function createConfetti() {
    const colors = ["#f1c40f", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6"];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 200 + "px";
      confetti.style.top = -10 + "px";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      animationContainer.appendChild(confetti);

      animateConfetti(confetti);
    }
  }

  function animateConfetti(element) {
    const animationDuration = Math.random() * 3 + 2;

    element.style.animation = `
            confetti-fall ${animationDuration}s linear forwards
        `;

    const style = document.createElement("style");
    style.textContent = `
            @keyframes confetti-fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(200px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);

    setTimeout(() => {
      element.remove();
      style.remove();
    }, animationDuration * 1000);
  }
});
