// Shows Chinese or English: a saved choice first, then the browser's languages, then English.
(function () {
  var root = document.documentElement;
  function saved() {
    try { var value = localStorage.getItem("aivu-lang"); return value === "zh" || value === "en" ? value : null; }
    catch (e) { return null; }
  }
  function fromBrowser() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh/i.test(langs[i])) return "zh";
      if (/^en/i.test(langs[i])) return "en";
    }
    return "en";
  }
  function mark() {
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-set-lang") === root.getAttribute("data-lang")));
    }
  }
  function set(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    mark();
  }
  set(saved() || fromBrowser());
  document.addEventListener("DOMContentLoaded", mark);
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("[data-set-lang]");
    if (!button) return;
    var lang = button.getAttribute("data-set-lang");
    set(lang);
    try { localStorage.setItem("aivu-lang", lang); } catch (e) {}
  });
})();
