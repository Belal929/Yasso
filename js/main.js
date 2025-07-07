// ======= Autoplay Music (No Fallback) =======
document.addEventListener('DOMContentLoaded', function() {
  var music = document.getElementById('birthdayMusic');
  if (music) {
    music.play(); // Force play, no fallback button
  }
});

// ======= Floating CSS Hearts Animation =======
const container = document.querySelector('.heart-container');
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  container.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 300);

// ======= Balloons Animation =======
function createBalloon() {
  var balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = (6 + Math.random() * 3) + 's';
  var container = document.getElementById('balloons-container');
  if (container) {
    container.appendChild(balloon);
    setTimeout(function() { balloon.remove(); }, 8000);
  }
}
setInterval(createBalloon, 1200);

// ======= Flowers Animation =======
function createFlower() {
  var flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (5 + Math.random() * 3) + 's';
  var container = document.getElementById('flowers-container');
  if (container) {
    container.appendChild(flower);
    setTimeout(function() { flower.remove(); }, 7000);
  }
}
setInterval(createFlower, 1800);

// ======= Butterflies Animation =======
function createButterfly() {
  var butterfly = document.createElement('div');
  butterfly.className = 'butterfly';
  butterfly.style.left = Math.random() * 100 + 'vw';
  butterfly.style.animationDuration = (4 + Math.random() * 3) + 's';
  var container = document.getElementById('butterflies-container');
  if (container) {
    container.appendChild(butterfly);
    setTimeout(function() { butterfly.remove(); }, 6000);
  }
}
setInterval(createButterfly, 2000);

// ======= Animated Text Interactivity =======
var animatedTexts = document.querySelectorAll('.animate-text');
animatedTexts.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    el.style.transition = 'color 0.4s';
    el.style.color = '#f472b6';
  });
  el.addEventListener('mouseleave', function() {
    el.style.color = '#a855f7';
  });
}); 