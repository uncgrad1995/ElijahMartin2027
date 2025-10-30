// Collapsible Player Stats
document.addEventListener("DOMContentLoaded", function() {
  const coll = document.querySelectorAll(".collapsible");
  coll.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
