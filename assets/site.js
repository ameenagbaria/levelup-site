/* Level Up Learning Center: shared script for English and Arabic pages */

/* ===== EDIT HERE: your WhatsApp number, international format, no + or spaces ===== */
var WHATSAPP = "972532809020";

(function () {
  var root = document.documentElement;
  var ar = root.lang === "ar";

  /* ---------- WhatsApp ---------- */
  var T = ar ? {
    hello: "مرحبا! بدي أسأل عن دروس الإنجليزي في ليفل أب.",
    reg: "مرحبا! بدي أسجّل لدروس الإنجليزي في ليفل أب.",
    name: "الاسم: ", prog: "البرنامج: ", age: "العمر/الصف: ", town: "البلد: "
  } : {
    hello: "مرحبا! Hi, I'd like to ask about English lessons at Level Up.",
    reg: "مرحبا! Hi, I'd like to register for lessons at Level Up.",
    name: "Name: ", prog: "Program: ", age: "Age/grade: ", town: "Town: "
  };
  var wa = "https://wa.me/" + WHATSAPP + "?text=";
  var pretty = "0" + WHATSAPP.slice(3, 5) + "-" + WHATSAPP.slice(5, 8) + "-" + WHATSAPP.slice(8);
  document.querySelectorAll("[data-wa-number]").forEach(function (el) { el.textContent = pretty; });
  document.querySelectorAll("[data-wa-link]").forEach(function (el) { el.href = wa + encodeURIComponent(T.hello); });
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();

  var form = document.getElementById("book");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var msg = [T.reg, T.name + f.get("name"), T.prog + f.get("program"),
      T.age + (f.get("age") || "-"), T.town + f.get("town")].join("\n");
    window.location.href = wa + encodeURIComponent(msg);
  });

  /* ---------- Tabs (one page, a link per audience: /#kids, /#exams ...) ---------- */
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel-tab"));
  var ids = panels.map(function (p) { return p.id.replace("tab-", ""); });
  var links = document.querySelectorAll(".tabs a");
  var current = null;

  function show(id, scroll) {
    if (ids.indexOf(id) < 0) id = "home";
    if (id === current) return;
    current = id;
    panels.forEach(function (p) { p.hidden = p.id !== "tab-" + id; });
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var active = document.querySelector('.tabs a[href="#' + id + '"]');
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest", inline: "center" });
    if (scroll) window.scrollTo(0, 0);
    if (window.LU_observe) window.LU_observe();
  }

  function route(scroll) {
    var h = location.hash.slice(1);
    if (ids.indexOf(h) >= 0 || !h) { show(h, scroll); return; }
    // not a tab (e.g. #register): keep the current tab and jump to that spot
    if (!current) show("home", false);
  }
  window.addEventListener("hashchange", function () { route(true); });
  route(false);

  /* ---------- Scroll effects ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  root.classList.remove("no-anim");
  root.classList.add("anim");

  // split marked headings into words that rise in one by one
  document.querySelectorAll(".split-words").forEach(function (el) {
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement("span");
            s.className = "w"; s.style.setProperty("--i", i++); s.textContent = part;
            frag.appendChild(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    })(el);
  });

  function count(el) {
    var to = parseFloat(el.getAttribute("data-to")), dec = +(el.getAttribute("data-dec") || 0);
    var pre = el.getAttribute("data-pre") || "", suf = el.getAttribute("data-suf") || "";
    var t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + (to * e).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-to]").forEach(count);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

  window.LU_observe = function () {
    document.querySelectorAll(".reveal:not(.in), .split-words:not(.in), .zoom:not(.in)").forEach(function (el) { io.observe(el); });
  };
  window.LU_observe();
})();
