const container = document.getElementById('container');

function randomColor() {
  return `hsl(${Math.floor(Math.random()*360)}, 80%, 60%)`;
}

function randomPosition() {
  return {
    x: Math.random() * (window.innerWidth - 60),
    y: Math.random() * (window.innerHeight - 60)
  };
}

function randomRotation() {
  return Math.random() * 360;
}

function randomScale() {
  return 0.7 + Math.random() * 2.3;
}

function randomShadow() {
  return `0 0 ${Math.floor(Math.random()*30+10)}px ${randomColor()}`;
}

function createNumber() {
  const num = Math.random() > 0.5 ? '6' : '7';
  const div = document.createElement('div');
  div.className = 'number';
  div.textContent = num;
  const {x, y} = randomPosition();
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.color = randomColor();
  div.style.transform = `rotate(${randomRotation()}deg) scale(${randomScale()})`;
  div.style.textShadow = randomShadow();
  div.style.filter = `blur(${Math.random() > 0.8 ? Math.random()*2 : 0}px)`;
  container.appendChild(div);
}

function burst(count = 10) {
  for (let i = 0; i < count; i++) createNumber();
}

// Keep generating numbers
setInterval(() => burst(2), 300);

// Add more on click/tap
window.addEventListener('pointerdown', () => burst(20));

// Initial burst
burst(30);
