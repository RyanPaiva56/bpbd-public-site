(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function desktop() {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  function closeItem(item) {
    item.classList.remove("is-open");
    var btn = item.querySelector(".nav-parent");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    nav.classList.toggle("hidden");
    var open = !nav.classList.contains("hidden");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll(".has-sub").forEach(function (item) {
    var btn = item.querySelector(".nav-parent");
    if (!btn) return;

    btn.addEventListener("click", function () {
      if (desktop()) return;
      nav.querySelectorAll(".has-sub.is-open").forEach(function (open) {
        if (open !== item) closeItem(open);
      });
      var expanded = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    item.addEventListener("mouseleave", function () {
      closeItem(item);
      if (desktop() && item.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });
  });
})();
