const TRIANGLES = document.querySelectorAll(".triangle");
const SEARCHPARAMS = new URLSearchParams(window.location.search);
const INTRO = SEARCHPARAMS.get("landing");

if (INTRO == "false") {
    TRIANGLES.forEach(e => e.parentNode.removeChild(e));
}
