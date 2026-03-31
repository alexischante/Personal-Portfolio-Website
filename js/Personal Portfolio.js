document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Greeting
  const style = document.createElement("style");
  style.textContent = `
    .animated-text {
      display: inline-block;
      animation: shake 6s ease-in-out infinite;
    }

    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-15px); }
      50% { transform: translateX(15px); }
      75% { transform: translateX(-3px); }
      100% { transform: translateX(3px); }
    }
  `;
  document.head.appendChild(style);

  const greetingElement = document.createElement("h2");
  const hours = new Date().getHours();
  let greetingText = hours < 12 ? "Good morning!" : hours < 18 ? "Good afternoon!" : "Good evening!";
  greetingElement.textContent = greetingText;
  greetingElement.classList.add("animated-text");
  greetingElement.style.position = "absolute";
  greetingElement.style.top = "10%";
  greetingElement.style.left = "47%";
  greetingElement.style.transform = "translate(-50%, -50%)";
  greetingElement.style.textAlign = "center";
  greetingElement.style.marginTop = "10px";
  greetingElement.style.color = "white";
  greetingElement.style.fontFamily = "Inter, sans-serif";

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(greetingElement);
  }

// 2. Random content Generator
const aside = document.getElementById("random-aside");

const randomContent = [
  { type: "image", src: "images/PPimages/art.jpeg" },
  { type: "image", src: "images/PPimages/mail.jpeg" },
  { type: "image", src: "images/PPimages/orange.jpeg" },
  { type: "image", src: "images/PPimages/asidenote.jpeg" },
  { type: "image", src: "images/PPimages/collage.jpeg" }
];

const pick = randomContent[Math.floor(Math.random() * randomContent.length)];

if (aside) {
  if (pick.type === "image") {
    const img = document.createElement("img");
    img.src = pick.src;
    img.alt = pick.alt || "Random image";
    img.style.width = "250px";
    img.style.height = "200px";

    // Add black border ONLY to selected images
    const borderedImages = ["images/PPimages/art.jpeg", "images/PPimages/orange.jpeg", "images/PPimages/collage.jpeg"];
    if (borderedImages.includes(pick.src)) {
      img.style.border = "3px solid white";
    }

    aside.appendChild(img);
  } else {
    const p = document.createElement("p");
    p.textContent = pick.text;
    p.style.fontSize = "16px";
    p.style.fontFamily = "Inter, sans-serif";
    p.style.maxWidth = "250px";
    aside.appendChild(p);
  }
}
  // 3. Toggle Section Visibility
  const toggleBtn = document.getElementById("toggle-button");
  const bioContent = document.getElementById("bio-content");

  if (toggleBtn && bioContent) {
    // Initialize styles
    bioContent.style.overflow = "hidden";
    bioContent.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
    bioContent.style.maxHeight = "1000px";
    bioContent.style.opacity = "1";

    let isVisible = true;

    toggleBtn.addEventListener("click", () => {
      if (isVisible) {
        bioContent.style.maxHeight = "0";
        bioContent.style.opacity = "0";
      } else {
        bioContent.style.maxHeight = "1000px";
        bioContent.style.opacity = "1";
      }
      isVisible = !isVisible;
    });
  }
});