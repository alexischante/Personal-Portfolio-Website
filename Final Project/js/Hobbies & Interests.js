document.addEventListener("DOMContentLoaded", function () {
  // 1. Interactive Hobby List
  const containers = document.querySelectorAll(".image-container");

  containers.forEach(container => {
    const baseImage = container.querySelector("img");
    const overlaySrc = container.getAttribute("data-overlay");
    const textBox = container.querySelector(".text-box");

    // Create overlay image
    const overlayImg = document.createElement("img");
    overlayImg.src = overlaySrc;
    overlayImg.alt = "Overlay";
    overlayImg.classList.add("overlay-image");
    container.appendChild(overlayImg);

    // Slide overlay up on hover
    container.addEventListener("mouseenter", () => {
      overlayImg.style.top = "0";
    });

    // Slide overlay down on mouse leave
    container.addEventListener("mouseleave", () => {
      // Only hide overlay if text box isn't open
      if (!textBox.classList.contains("visible")) {
        overlayImg.style.top = "-110%";
      }
    });

    // Toggle text box and hide overlay
    container.addEventListener("click", () => {
      textBox.classList.toggle("visible");

      // Hide overlay if box is visible
      if (textBox.classList.contains("visible")) {
        overlayImg.style.top = "-110%";
      }
    });
  });
  // 2. Skills Progress Bars
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      const fill = bar.querySelector(".progress-fill");
      fill.style.width = percent + "%";
      fill.textContent = percent + "%";
  });

  // 3. Filter Interests
  const types = ["all", "creative arts", "fitness", "technology"];

  const controls = document.createElement("div");
  controls.id = "filterControls";

  types.forEach(function(type) {
      const btn = document.createElement("button");
      btn.style.backgroundColor = "transparent";
      btn.textContent = type.split(" ").map(function(w) { 
          return w.charAt(0).toUpperCase() + w.slice(1); 
      }).join(" ");
      btn.setAttribute("data-filter", type);
      btn.onclick = function() {
          filterHobbies(this.getAttribute("data-filter"));
      };
      controls.appendChild(btn);
  });

  const hobbyList = document.getElementById("hobbyList");
  if (hobbyList) {
      hobbyList.parentNode.insertBefore(controls, hobbyList);
  }

  function filterHobbies(filter) {
      const items = document.querySelectorAll("#hobbyList .hobby");
      items.forEach(function(li) {
          const t = li.getAttribute("data-type") || "";
          li.style.display = (filter === "all" || t.toLowerCase() === filter) ? "" : "none";
      });
  }

  // Show all on load
  filterHobbies("all");
});