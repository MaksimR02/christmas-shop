const slider = document.querySelector(".block-slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn-left");
const nextBtn = document.querySelector(".slider-btn-right");
const sliderWindow = document.querySelector(".slider-window");

let currentOffset = 0;

function getStep() {
  if (window.innerWidth <= 380) {
    return 166;
  }

  if (window.innerWidth <= 768) {
    return 159;
  }

  return 140;
}

function getMaxOffset() {
    return slider.scrollWidth - sliderWindow.clientWidth;
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentOffset}px)`;

  prevBtn.disabled = currentOffset <= 0;
  nextBtn.disabled = currentOffset >= getMaxOffset();
}

nextBtn.addEventListener("click", () => {
  const step = getStep();
  const maxOffset = getMaxOffset();

  currentOffset += step;

  if (currentOffset > maxOffset) {
    currentOffset = maxOffset;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  const step = getStep();

  currentOffset -= step;

  if (currentOffset < 0) {
    currentOffset = 0;
  }

  updateSlider();
});

window.addEventListener("resize", () => {
  const maxOffset = getMaxOffset();

  if (currentOffset > maxOffset) {
    currentOffset = maxOffset;
  }
  updateSlider();
});

updateSlider();
