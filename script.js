document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id = a.getAttribute('href');
    var el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


var toTop = document.getElementById('toTop');
window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});
toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
