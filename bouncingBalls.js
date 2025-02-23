function createBouncingBalls() {
  const container = document.getElementById('root');
  for (let i = 0; i < 10; i++) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.borderRadius = '50%';
    ball.style.backgroundColor = 'red';
    ball.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    ball.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    container.appendChild(ball);
    animateBall(ball);
  }
}

function animateBall(ball) {
  let directionX = Math.random() < 0.5 ? 1 : -1;
  let directionY = Math.random() < 0.5 ? 1 : -1;
  const speed = 2;

  function move() {
    const rect = ball.getBoundingClientRect();
    if (rect.left + speed * directionX < 0 || rect.right + speed * directionX > window.innerWidth) {
      directionX *= -1;
    }
    if (rect.top + speed * directionY < 0 || rect.bottom + speed * directionY > window.innerHeight) {
      directionY *= -1;
    }
    ball.style.left = rect.left + speed * directionX + 'px';
    ball.style.top = rect.top + speed * directionY + 'px';
    requestAnimationFrame(move);
  }
  move();
}

createBouncingBalls();