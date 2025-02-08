document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.querySelector("svg");
  const shapeElement = svgElement.querySelector("circle"); // Start with circle

  const shapes = [
    { type: "circle", attributes: { cx: "25", cy: "25", r: "25" } },
    {
      type: "rect",
      attributes: { x: "10", y: "10", width: "30", height: "30" },
    },
    { type: "polygon", attributes: { points: "25,5 45,45 5,45" } },
  ];

  let currentShapeIndex = 0;
  const morphingInterval = 2100; // Morph every 2.1s

  function morphShape() {
    svgElement.classList.add(
      "scale-110",
      "transition-transform",
      "duration-300",
      "ease-in-out"
    );

    setTimeout(() => {
      // Get next shape attributes
      const nextShape = shapes[currentShapeIndex];

      // Change the existing shape dynamically instead of replacing it
      shapeElement.setAttribute("fill", "#fbbf24"); // Ensure color remains the same

      // Apply attributes for different shapes
      if (nextShape.type === "circle") {
        shapeElement.setAttribute("cx", nextShape.attributes.cx);
        shapeElement.setAttribute("cy", nextShape.attributes.cy);
        shapeElement.setAttribute("r", nextShape.attributes.r);
        shapeElement.setAttribute("d", ""); // Reset 'd' if previous shape was a path
      } else if (nextShape.type === "rect") {
        shapeElement.setAttribute("x", nextShape.attributes.x);
        shapeElement.setAttribute("y", nextShape.attributes.y);
        shapeElement.setAttribute("width", nextShape.attributes.width);
        shapeElement.setAttribute("height", nextShape.attributes.height);
      } else if (nextShape.type === "polygon") {
        shapeElement.setAttribute("points", nextShape.attributes.points);
      }

      svgElement.classList.remove("scale-110"); // Reset bounce effect
      currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
    }, 300);
  }

  setInterval(morphShape, morphingInterval);
});
