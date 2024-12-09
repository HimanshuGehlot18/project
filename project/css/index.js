document.getElementById("myfrom").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form subumitted successfully");
  this.reset();
});
