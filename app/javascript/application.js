// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails";
// import "controllers";

const body = document.getElementById("home");

document.addEventListener("DOMContentLoaded", function () {
  let greeting = document.createElement("p");
  greeting.textContent = "Hello, World!";
  document.body.appendChild(greeting);
});
