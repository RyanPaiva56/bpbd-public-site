(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("hidden");
    var open = !nav.classList.contains("hidden");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll(".nav-parent").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".has-sub");
      var expanded = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  });
})();
