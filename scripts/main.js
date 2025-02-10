document.addEventListener("DOMContentLoaded", function () {
  const words = ["Speed", "Security", "Scalability"];
  let currentWordIndex = 0;
  const spanElement = document.getElementById("roll");
  const typingSpeed = 150; // Speed of typing in milliseconds
  const delayBetweenWords = 600; // Delay between words in milliseconds

  function typeWriter(word, index, callback) {
    if (index < word.length) {
      const fragment = document.createDocumentFragment();
      const textNode = document.createTextNode(word.charAt(index));
      fragment.appendChild(textNode);
      spanElement.appendChild(fragment);
      setTimeout(() => typeWriter(word, index + 1, callback), typingSpeed);
    } else {
      setTimeout(callback, delayBetweenWords);
    }
  }

  function deleteWord(callback) {
    if (spanElement.textContent.length > 0) {
      spanElement.textContent = spanElement.textContent.substring(
        0,
        spanElement.textContent.length - 1
      );
      setTimeout(() => deleteWord(callback), typingSpeed);
    } else {
      callback();
    }
  }

  function startAnimation() {
    deleteWord(() => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      typeWriter(words[currentWordIndex], 0, startAnimation);
    });
  }

  startAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");

  const navbarSticky = document.getElementById("navbar-sticky");

  navbarToggle.addEventListener("click", function () {
    navbarSticky.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
  }

  enableDarkMode();
});
