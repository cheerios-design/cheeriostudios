document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.querySelector("svg");

  const shapes = [
    '<circle cx="25" cy="25" r="25" fill="#fbbf24"></circle>',
    '<rect x="10" y="10" width="30" height="30" fill="#fbbf24"></rect>',
    '<polygon points="25,5 45,45 5,45" fill="#fbbf24"></polygon>',
  ];

  let currentShapeIndex = 0;
  const morphingInterval = 2100; // Interval for morphing in milliseconds

  function morphShape() {
    // Apply bounce effect
    svgElement.classList.add(
      "scale-110",
      "transition-transform",
      "duration-300",
      "ease-in-out"
    );

    setTimeout(() => {
      // Remove existing shape
      svgElement.innerHTML = shapes[currentShapeIndex];

      // Reset bounce effect after change
      svgElement.classList.remove("scale-110");

      // Cycle through shapes
      currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
    }, 300); // Transition duration
  }

  // Start morphing loop
  setInterval(morphShape, morphingInterval);
});
