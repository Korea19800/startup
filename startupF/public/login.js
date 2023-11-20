// js for login -> index.html
function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    // move to posts page
    window.location.href = "posts.html";
  }
  