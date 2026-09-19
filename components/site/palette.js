/*
  One source for the colours that SVG and inline styles need as literal values.
  Tailwind covers everything expressible as a class; these are the rest.

  The two signal colours are not a taste choice. They were run through the
  data-visualisation palette validator against the vacuum ground and against
  the lightest point of its gradient, and both sit inside the L 0.48-0.67
  lightness band with chroma above the grey floor and colour-vision-deficiency
  separation well past the threshold. The previous pair (#F2D02C / #39C0CF)
  failed the lightness band outright, which is why the page read as glaring.
*/

export const PALETTE = {
  vacuum: "#07090D",
  vacuumRaised: "#0C1016",
  vacuumSunk: "#04060A",
  /* The lightest point of the ground gradient. Every text contrast ratio in
     this design is measured against this, not against the vacuum, because
     this is the worst case a reader actually sees. */
  vacuumLift: "#10161F",
  ink: "#D6DDE4",
  steel: "#6E8FAC",
  steelBright: "#93A6B8",
  steelDim: "#2C3B49",
  arc: "#3C5568",
};

/* Categorical, fixed order, never cycled. */
export const JET = {
  infrastructure: "#A8861B",
  software: "#0095AA",
};

export const STATUS = {
  energy: "#C0392B",
  sending: "#A8861B",
  sent: "#0095AA",
  error: "#C0392B",
};
