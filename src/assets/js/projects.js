(function () {
  var root = document.getElementById("recent-projects");
  var dialog = document.getElementById("project-dialog");
  if (!root || !dialog) return;

  var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-project-open]"));
  var items = buttons.map(function (btn) {
    var image = btn.querySelector("img");
    return {
      src: image.getAttribute("src"),
      alt: image.getAttribute("alt"),
    };
  });
  if (!items.length) return;

  var img = dialog.querySelector("[data-project-image]");
  var status = dialog.querySelector("[data-project-status]");
  var index = 0;
  var opener = null;

  function show(next) {
    index = (next + items.length) % items.length;
    var item = items[index];
    img.src = item.src;
    img.alt = item.alt;
    status.textContent = index + 1 + " of " + items.length;
  }

  buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      opener = btn;
      show(i);
      dialog.showModal();
    });
  });

  dialog.querySelector("[data-project-prev]").addEventListener("click", function () {
    show(index - 1);
  });
  dialog.querySelector("[data-project-next]").addEventListener("click", function () {
    show(index + 1);
  });
  dialog.querySelector("[data-project-close]").addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    if (opener) opener.focus();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
  });
})();
