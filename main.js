const rangeOutput = document.querySelector('[data-range-output]');
const rangeInput = document.querySelector('.range-input');
const progress = document.querySelector('[data-range-progress]');

function rangeSlider(value) {
  rangeOutput.textContent = value;
  progress.value = value;
}

function onInputRangeInput() {
  const value = rangeInput.value;

  rangeSlider(value);
}

rangeInput.addEventListener('input', onInputRangeInput);

rangeSlider(0);
