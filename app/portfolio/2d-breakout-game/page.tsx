"use client";
import { useEffect, useRef, useState } from "react";
import RestartIcon from "./RestartIcon";

export default function Page() {
  const [paused, setPaused] = useState(true);
  const [lives, setLives] = useState<number>(null);
  const [score, setScore] = useState<number>(null);
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = paused ? 0 : 4;
    let dy = paused ? 0 : -3;

    var ballRadius = 12;

    var paddleHeight = 10;
    var paddleWidth = 80;
    var paddleX = (canvas.width - paddleWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;

    var brickRowCount = 6;
    var brickColumnCount = 6;
    var brickWidth = 80;
    var brickHeight = 20;
    var brickPadding = 16;
    var brickOffsetTop = 40;
    let brickOffsetLeft =
      canvas.width / 2 -
      (brickWidth * brickColumnCount + brickPadding * (brickColumnCount - 1)) /
        2;

    var bricks = [];
    for (var c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    var scoreCount = 0;
    var livesCount = 4;
    setLives(livesCount);
    setScore(scoreCount);

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function mouseMoveHandler(e) {
      var relativeX = e.clientX - canvas.parentElement.offsetLeft;
      if (
        relativeX > 0 - paddleWidth / 2 &&
        relativeX <
          canvas.width - canvas.parentElement.offsetLeft + paddleWidth * 2
      ) {
        paddleX = relativeX + paddleWidth * 0.5;
      }
    }

    function keyDownHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
      }
    }

    function collisionDetection() {
      for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
          var b = bricks[c][r];
          if (b.status == 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              scoreCount++;
              setScore(scoreCount);
              if (scoreCount == brickRowCount * brickColumnCount) {
                alert("YOU WIN, CONGRATULATIONS!");
                document.location.reload();
              }
            }
          }
        }
      }
    }

    function drawBricks() {
      for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
            var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;

            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();
      x += dx;
      y += dy;

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }

      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          livesCount--;
          setLives(livesCount);
          if (!livesCount) {
            alert("GAME OVER");
            document.location.reload();
          } else {
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 4;
            dy = -3;
            paddleX = (canvas.width - paddleWidth) / 2;
          }
        }
      }

      if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
          paddleX = canvas.width - paddleWidth;
        }
      } else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
          paddleX = 0;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, [paused]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="portfolio"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="about-content w-full dark:bg-black pb-16">
            <h2 className="font-title type-preset-2 mb-10">
              Mozilla 2D Breakout Game
            </h2>
          </div>

          <div className="w-full relative">
            <div className="w-full flex justify-between font-title text-3xl">
              <span>Score: {score}</span>
              <div className="flex gap-2">
                <button onClick={() => document.location.reload()}>
                  <RestartIcon />
                </button>
                <span>Lives: {lives}</span>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              onMouseEnter={() => setPaused(false)}
              id="myCanvas"
              width={1376}
              height={917.33}
              className="bg-green-200 max-w-full w-full"
            ></canvas>
          </div>
        </div>
      </section>
    </main>
  );
}
