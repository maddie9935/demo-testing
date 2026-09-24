/*
  INTENTIONALLY INACCESSIBLE — for demo purposes only.

  This recreates a common bad pattern: a "blinking" promo made by
  repeatedly removing and re-inserting text inside an assertive live
  region. Every time the text comes back, screen readers treat it as a
  new urgent announcement and interrupt whatever the user was doing.

  Blink rate is about 0.6 times per second, well under the WCAG 2.3.1
  limit of 3 flashes per second, so it is not a seizure risk.
*/
(function () {
  var text = document.getElementById("promo-text");
  if (!text) return;

  var message = "Sale ends soon!";
  var visible = true;
  var toggle = false;

  setInterval(function () {
    visible = !visible;

    if (visible) {
      // Alternate an invisible zero-width space so screen readers that
      // skip duplicate announcements (e.g. VoiceOver) still re-read it.
      toggle = !toggle;
      text.textContent = message + (toggle ? "\u200B" : "");
      text.classList.remove("is-hidden");
    } else {
      text.textContent = "";
      text.classList.add("is-hidden");
    }
  }, 800);
})();
