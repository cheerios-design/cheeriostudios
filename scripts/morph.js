// SVG Morphing Animation with Bounce Effect
const svgElement = document.querySelector("svg");

const shapes = [
  '<circle cx="25" cy="25" r="25" fill="#fbbf24"></circle>',
  '<rect x="10" y="10" width="30" height="30" fill="#fbbf24"></rect>',
  '<polygon points="25,5 45,45 5,45" fill="#fbbf24"></polygon>',
];

let currentShapeIndex = 0;
const morphingInterval = 600; // Time before changing shape (ms)

// Function to apply bounce effect
function applyBounceEffect() {
  svgElement.classList.add(
    "scale-110",
    "transition-transform",
    "duration-300",
    "ease-in-out"
  );

  setTimeout(() => {
    svgElement.classList.remove("scale-110");
  }, 300);
}

function morphShape() {
  applyBounceEffect(); // Apply bounce before changing shape

  setTimeout(() => {
    // Remove existing shape
    while (svgElement.firstChild) {
      svgElement.removeChild(svgElement.firstChild);
    }

    // Add new shape
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = shapes[currentShapeIndex];
    const newShape = tempDiv.firstChild;
    svgElement.appendChild(newShape);

    // Cycle through shapes
    currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
  }, 300); // Shape change happens after bounce
}

// Start morphing loop
setInterval(morphShape, morphingInterval);
