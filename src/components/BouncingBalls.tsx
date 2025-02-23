import React from "react";

const BouncingBalls = () => {
  const [balls, setBalls] = useState([]);

  const addBall = (e) => {
    const newBall = {
      left: e.clientX,
      top: e.clientY,
      xSpeed: Math.random() < 0.5 ? 1 : -1,
      ySpeed: Math.random() < 0.5 ? 1 : -1
    };
    setBalls([...balls, newBall]);
  };

  useEffect(() => {
    const moveBalls = () => {
      setBalls(balls.map(ball => {
        if (ball.left + ball.xSpeed < 0 || ball.left + ball.xSpeed > window.innerWidth) {
          ball.xSpeed *= -1;
        }
        if (ball.top + ball.ySpeed < 0 || ball.top + ball.ySpeed > window.innerHeight) {
          ball.ySpeed *= -1;
        }
        ball.left += ball.xSpeed;
        ball.top += ball.ySpeed;
        return ball;
      }));
      requestAnimationFrame(moveBalls);
    };
    moveBalls();
  }, [balls]);

  return (
    <div onClick={addBall} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {balls.map((ball, index) => (
        <div key={index} style={{ position: 'absolute', top: ball.top, left: ball.left, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'red' }} />
      ))}
    </div>
  );
};

export default BouncingBalls;