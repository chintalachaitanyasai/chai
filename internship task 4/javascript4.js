document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img');

  img.addEventListener('mouseover', () => {
    img.style.transform = 'rotate(360deg)';
    img.style.transition = 'transform 1s ease-in-out';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'rotate(0deg)';
  });
});
