import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

new Glide(".glide", {
  type: "carousel",
}).mount();

const a0 = annotate(document.querySelector("#marcos"), {
  type: "box",
  color: "#0369a1",
  padding: 15,
  animationDuration: 3000,
  strokeWidth: 1,
});

const a1 = annotate(document.querySelector("#life"), {
  type: "underline",
  color: "#075985",
  animationDuration: 2000,
  padding: 0,
  strokeWidth: 2,
});

const ag = annotationGroup([a0, a1]);
ag.show();
