document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.querySelector(".login-section");
  const loginForm = document.getElementById("loginForm");

  // Mock user data (replace with actual API calls)
  const users = [
    { username: "operational", password: "op123", role: "Operational" },
    { username: "managerial", password: "mg123", role: "Managerial" },
    { username: "strategic", password: "st123", role: "Strategic" }
  ];

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      loginSection.style.display = "none";
      displayRoleBasedContent(user.role);
    } else {
      alert("Invalid credentials");
    }
  });

  function displayRoleBasedContent(role) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");

    if (role === "Operational") {
      document.querySelector(".management").style.display = "block";
    } else if (role === "Managerial") {
      document.querySelector(".business-model").style.display = "block";
      document.querySelector(".management").style.display = "block";
    } else if (role === "Strategic") {
      document.querySelector(".mission").style.display = "block";
      document.querySelector(".business-model").style.display = "block";
      document.querySelector(".management").style.display = "block";
    }
  }

  // Add scroll animations
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  console.log("Johnson Digital Academy blog is live!");
});
