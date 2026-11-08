(function () {
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  var items = Array.prototype.slice.call(nav.querySelectorAll(".has-sub"));

  function desktop() {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  function setOpen(item, open) {
    item.classList.toggle("is-open", open);
    var btn = item.querySelector(".nav-parent");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeOthers(item) {
    items.forEach(function (other) {
      if (other !== item) setOpen(other, false);
    });
  }

  function setMenuOpen(open) {
    nav.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setMenuOpen(nav.classList.contains("hidden"));
  });

  items.forEach(function (item) {
    var btn = item.querySelector(".nav-parent");
    if (!btn) return;

    var openedByHover = false;

    btn.addEventListener("click", function (event) {
      if (openedByHover && event.detail > 0) {
        openedByHover = false;
        return;
      }
      openedByHover = false;
      var open = !item.classList.contains("is-open");
      closeOthers(item);
      setOpen(item, open);
    });

    item.addEventListener("mouseenter", function () {
      if (!desktop() || item.classList.contains("is-open")) return;
      closeOthers(item);
      setOpen(item, true);
      openedByHover = true;
    });

    item.addEventListener("mouseleave", function () {
      openedByHover = false;
      var active = document.activeElement;
      if (!desktop() || (item.contains(active) && active.matches(":focus-visible"))) return;
      setOpen(item, false);
    });

    item.addEventListener("focusout", function (event) {
      if (!item.contains(event.relatedTarget)) setOpen(item, false);
    });

    item.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || !item.classList.contains("is-open")) return;
      event.stopPropagation();
      setOpen(item, false);
      btn.focus();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || desktop() || nav.classList.contains("hidden")) return;
    setMenuOpen(false);
    toggle.focus();
  });
})();
