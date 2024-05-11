"use client";
import { useEffect, useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>();

  // useEffect(() => {
  //   let canvas = canvasRef.current;
  //   let ctx = canvas.getContext("2d");

  //   let x = canvas.width / 2;
  //   let y = canvas.height - 30;
  //   let dx = 2;
  //   let dy = -2;

  //   let ballRadius = 16;

  //   let paddleHeight = 20;
  //   let paddleWidth = 120;
  //   let paddleX = (canvas.width - paddleWidth) / 2;
  //   let rightPressed = false;
  //   let leftPressed = false;

  //   let brickColumnCount = 6;
  //   let brickRowCount = 4;
  //   let brickWidth = 80;
  //   let brickHeight = 40;
  //   let brickPadding = 16;
  //   let brickOffsetTop = 80;
  //   let brickOffsetLeft =
  //     canvas.width / 2 -
  //     (brickWidth * brickColumnCount + brickPadding * (brickColumnCount - 1)) /
  //       2;

  //   let bricks = [];
  //   for (let c = 0; c < brickRowCount; c++) {
  //     bricks[c] = [];
  //     for (let r = 0; r < brickColumnCount; r++) {
  //       bricks[c][r] = { x: 0, y: 0, status: 1 };
  //     }
  //   }

  //   let score = 0;

  //   let lives = 3;

  //   document.addEventListener("keydown", keyDownHandler, false);
  //   document.addEventListener("keyup", keyUpHandler, false);
  //   document.addEventListener("mousemove", mouseMoveHandler, false);

  //   function mouseMoveHandler(e) {
  //     let relativeX = e.clientX - canvas.offsetLeft;
  //     if (relativeX > 0 && relativeX < canvas.offsetWidth) {
  //       paddleX = relativeX + paddleWidth / 4;
  //     }
  //   }

  //   function keyDownHandler(e) {
  //     if (e.key == "Right" || e.key == "ArrowRight") {
  //       rightPressed = true;
  //     } else if (e.key == "Left" || e.key == "ArrowLeft") {
  //       leftPressed = true;
  //     }
  //   }

  //   function keyUpHandler(e) {
  //     if (e.key == "Right" || e.key == "ArrowRight") {
  //       rightPressed = false;
  //     } else if (e.key == "Left" || e.key == "ArrowLeft") {
  //       leftPressed = false;
  //     }
  //   }

  //   function collisionDetection() {
  //     for (let c = 0; c < brickRowCount; c++) {
  //       for (let r = 0; r < brickColumnCount; r++) {
  //         let b = bricks[c][r];
  //         if (b.status == 1) {
  //           if (
  //             x > b.x &&
  //             x < b.x + brickWidth &&
  //             y > b.y &&
  //             y < b.y + brickHeight
  //           ) {
  //             dy = -dy;
  //             b.status = 0;
  //             score++;
  //             if (score == brickColumnCount * brickRowCount) {
  //               alert("YOU WIN, CONGRATULATIONS!");
  //               document.location.reload();
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }

  //   function drawScore() {
  //     ctx.font = "18px Montserrat";
  //     ctx.fillStyle = "#0095DD";
  //     ctx.fillText("Score: " + score, 8, 32);
  //   }

  //   function drawLives() {
  //     ctx.font = "18px Montserrat";
  //     ctx.fillStyle = "#0095DD";
  //     ctx.fillText("Lives: " + lives, canvas.width - 72, 32);
  //   }

  //   function drawBricks() {
  //     for (let c = 0; c < brickRowCount; c++) {
  //       for (let r = 0; r < brickColumnCount; r++) {
  //         if (bricks[c][r].status == 1) {
  //           let brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
  //           let brickY = c * (brickHeight + brickPadding) + brickOffsetTop;

  //           bricks[c][r].x = brickX;
  //           bricks[c][r].y = brickY;
  //           ctx.beginPath();
  //           ctx.rect(brickX, brickY, brickWidth, brickHeight);
  //           ctx.fillStyle = "#0095DD";
  //           ctx.fill();
  //           ctx.closePath();
  //         }
  //       }
  //     }
  //   }

  //   function drawBall() {
  //     ctx.beginPath();
  //     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  //     ctx.fillStyle = "#0095DD";
  //     ctx.fill();
  //     ctx.closePath();
  //   }

  //   function drawPaddle() {
  //     ctx.beginPath();
  //     ctx.rect(
  //       paddleX,
  //       canvas.height - paddleHeight,
  //       paddleWidth,
  //       paddleHeight
  //     );
  //     ctx.fillStyle = "#0095DD";
  //     ctx.fill();
  //     ctx.closePath();
  //   }

  //   function draw() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     drawBricks();
  //     drawBall();
  //     drawPaddle();
  //     drawScore();
  //     drawLives();
  //     collisionDetection();
  //     x += dx;
  //     y += dy;

  //     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  //       dx = -dx;
  //     }

  //     if (y + dy < ballRadius) {
  //       console.log(y, y + dy);
  //       dy = -dy;
  //     } else if (y + dy > canvas.height - ballRadius) {
  //       if (x > paddleX && x < paddleX + paddleWidth) {
  //         dy = -dy;
  //       } else {
  //         lives--;
  //         console.log(lives);
  //         if (!lives) {
  //           alert("GAME OVER");
  //           // document.location.reload();
  //         } else {
  //           x = canvas.width / 2;
  //           y = canvas.height - 30;
  //           dx = 2;
  //           dy = -2;
  //           paddleX = (canvas.width - paddleWidth) / 2;
  //         }
  //       }
  //     }

  //     if (rightPressed) {
  //       paddleX += 7;
  //       if (paddleX + paddleWidth > canvas.width) {
  //         paddleX = canvas.width - paddleWidth;
  //       }
  //     } else if (leftPressed) {
  //       paddleX -= 7;
  //       if (paddleX < 0) {
  //         paddleX = 0;
  //       }
  //     }

  //     requestAnimationFrame(draw);
  //   }

  //   draw();

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler, false);
  //     document.removeEventListener("keyup", keyUpHandler, false);
  //     document.removeEventListener("mousemove", mouseMoveHandler, false);
  //   };
  // }, []);

  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 4;
    let dy = -3;

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
    var brickPadding = 10;
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

    var score = 0;

    var lives = 3;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function mouseMoveHandler(e) {
      var relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.offsetWidth) {
        paddleX = relativeX + paddleWidth / 1.5;
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
              score++;
              if (score == brickRowCount * brickColumnCount) {
                alert("YOU WIN, CONGRATULATIONS!");
                document.location.reload();
              }
            }
          }
        }
      }
    }

    function drawScore() {
      ctx.font = "18px Montserrat";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: " + score, 8, 40);
    }

    function drawLives() {
      ctx.font = "18px Montserrat";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: " + lives, canvas.width - 72, 40);
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
      drawScore();
      drawLives();
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
          lives--;
          if (!lives) {
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
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="portfolio"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="about-content w-full dark:bg-black pb-32">
            <h2 className="font-title type-preset-2 mb-10">
              Mozilla 2D Breakout Game
            </h2>
            <p className="font-body type-preset-base max-w-2xl">{`I'm a fresh face with an old soul, and I'm always looking to learn. There's a saying that a wise person learns from his mistakes and a wiser one learns from others' mistakes. However, the wisest among us learn from others' successes. I'm a product of all of the successes of those that have come before me and have prepared me for excellence. My goal is to be a lesson for the wisest members of the generations to follow.`}</p>
          </div>

          <canvas
            ref={canvasRef}
            id="myCanvas"
            width={1376}
            height={917.33}
            className="bg-green-200 max-w-full w-full"
          ></canvas>
        </div>
      </section>
    </main>
  );
}
