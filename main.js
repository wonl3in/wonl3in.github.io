 import { Engine, Body, Render, Events, Runner, World, Bodies, Collision } from "matter-js";
 import { FRUITS } from "./fruits";

 const collisionSound = new Audio('back_style_3_002.wav');
 const backgroundMusic = new Audio('suikagameOST.mp3'); 


 const engine = Engine.create();
 const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: false,
    background: "#ffeeeb",
    width: 620,
    height: 850,
  }
 });

 const world = engine.world;

 const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: true,
  render: {  fillStyle: "#662d1e"  }
 });

 const RightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: true,
  render: {  fillStyle: "#662d1e"  }
 });

 const ground = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: true,
  render: {  fillStyle: "#662d1e"  }
 });

 const topLine = Bodies.rectangle(310, 150, 620, 2, {
  name: "topLine",
  isStatic: true,
  isSensor: true,
  render: {  fillStyle: "#662d1e"  }
 });


 World.add(world, [leftWall, RightWall, ground, topLine]); 


 Render.run(render);
 Runner.run(engine);

 let currentBody = null;
 let currentFruit = null;
 let disableAction = false;
 let interval = null;


 function addFruit() {
  const index = Math.floor(Math.random() * 5);
  const fruit = FRUITS [index];

  const body = Bodies.circle(300, 50, fruit.radius, {
    index: index,
    isSleeping: true, 
    render: {
      sprite: { texture: `${fruit.name}.png`}
    },
    restitution: 0.5,
  });

  currentBody = body;
  currentFruit = fruit;

  World.add(world, body);
 }


window.onkeydown = (event) => {
  if (disableAction) {
    return;
  }

  switch (event.code) {
    case "KeyA":
      if (interval)
        return;

      interval = setInterval(() => {
        if (currentBody.position.x - currentFruit.radius > 30)
        Body.setPosition(currentBody, {
          x:  currentBody.position.x - 1,
          y: currentBody.position.y,
        });
      }, 5);

      playBackgroundMusic();
     
      break;

    case "KeyD":
      if (interval)
        return;
      
      interval = setInterval(() => {
        if (currentBody.position.x + currentFruit.radius < 590)
        Body.setPosition(currentBody, {
          x: currentBody.position.x + 1,
          y: currentBody.position.y,
        });
      }, 5);

      playBackgroundMusic();

      break;

    case "KeyS":
      currentBody.isSleeping = false;
      disableAction = true;

      setTimeout(() => {
        addFruit();
        disableAction = false;
      }, 1000);

      playBackgroundMusic();

      break;    
  }
}

window.onkeyup = (event) => {
  switch (event.code) {
    case "KeyA":
    case "KeyD":
      clearInterval(interval);
      interval = null;
  }
}





Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA.index === collision.bodyB.index) {
      const index = collision.bodyA.index;

      if (index === FRUITS.length - 1)  {
        return;
      }

      World.remove(world, [collision.bodyA, collision.bodyB]);
    
      const newFruit = FRUITS[index + 1];

      const newBody = Bodies.circle(
        collision.collision.supports[0].x,
        collision.collision.supports[0].y,
        newFruit.radius,
        {
          render: { 
            sprite: {texture: `${newFruit.name}.png`  }
          },
          index: index + 1,
        }
      );

      
      World.add(world, newBody);
    

    // 충돌 시마다 점수 증가


    // World.remove가 발생할 때마다 점수 200점 추가
    score += 100;
    // 점수 업데이트
    scoreText.textContent = `Score: ${score}`;

    collisionSound.play();
  }


    if (
      !disableAction &&
      (collision.bodyA.name === "topLine" || collision.bodyB.name === "topLine" )) {  
      alert("Game Over");
      }
    });
});



// 점수를 표시할 Text 엘리먼트 생성
const scoreText = document.createElement('div');
scoreText.id = 'score';
scoreText.style.position = 'absolute';
scoreText.style.top = '50px';
scoreText.style.left = '50%';
scoreText.style.fontSize = '24px';
scoreText.style.color = '#000';
document.body.appendChild(scoreText);

// 초기 점수 설정
let score = 0;



// 초기화 함수에서 점수 초기화
function initializeScore() {
  score = 0;
  scoreText.textContent = `스코어: ${score}`;
  
}

function playBackgroundMusic() {
  backgroundMusic.loop = true; // 반복 재생 설정
  backgroundMusic.play(); // 배경음악 재생
}



// ... (기존 코드)

// 초기화 함수 호출
initializeScore();
 addFruit();


