const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#555';
  } else {
    navbar.style.backgroundColor = 'lightblue';
  }
});