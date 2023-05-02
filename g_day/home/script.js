const images = document.querySelectorAll('.bubble img');

for (let i = 0; i < images.length; i++) {
  const image = images[i];

  // create bubble overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  image.parentNode.appendChild(overlay);

  // add event listeners to image
  image.addEventListener('mouseenter', () => {
    overlay.style.display = 'flex';
  });

  image.addEventListener('mouseleave', () => {
    overlay.style.display = 'none';
  });
}