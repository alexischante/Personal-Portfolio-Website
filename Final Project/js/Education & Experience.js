// 1. Dynamic Resume Table
const resumeData = [
  {
      year: "2018-2022",
      place: "Frederick Douglass High School",
      description: "4.0 Graduate"
  },
  {
      year: "2018-2022",
      place: "Prince George's Community College",
      description: "Hospitality Service Management"
  },
  {
      year: "2021",
      place: "IBM Internship",
      description: "Artificial Intelligence Internship"
  },
  {
      year: "2022-2026",
      place: "McDaniel College",
      description: "Studying Business Administration, Computer Science, & Psychology"
  },
  {
      year: "2025",
      place: "McDaniel College",
      description: "Personal Portfolio Website Project"
  }
];

// Function to render the resume table
function renderResumeTable() {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // Clear existing content

  resumeData.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${entry.year}</td>
          <td>${entry.place}</td>
          <td>${entry.description}</td>
      `;
      tbody.appendChild(row);
  });
}

// 2. Sort Table
window.addEventListener("DOMContentLoaded", function () {
  renderResumeTable();

  var table = document.getElementsByTagName("table")[0];
  var headers = table.getElementsByTagName("th");
  var tbody  = table.getElementsByTagName("tbody")[0];

  headers[0].style.cursor = "pointer"; // Year
  headers[1].style.cursor = "pointer"; // Institution
  headers[0].onclick = function() { simpleSort(0); };
  headers[1].onclick = function() { simpleSort(1); };

  function simpleSort(colIndex) {
    var rows = tbody.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      for (var j = i + 1; j < rows.length; j++) {
        var a = rows[i].getElementsByTagName("td")[colIndex].innerText;
        var b = rows[j].getElementsByTagName("td")[colIndex].innerText;
        if (a > b) {
          tbody.insertBefore(rows[j], rows[i]);
        }
      }
    }
  }
});

// 3. Interaction
document.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('heart-btn');
  const msg = document.getElementById('like-message');

  heart.onclick = function() {
    heart.classList.toggle('clicked');
    
    if (heart.classList.contains('clicked')) {
      msg.textContent = "Thanks for liking my resume!";
    } else {
      msg.textContent = "";
    }
  };
});