document.getElementById('pencil__style').addEventListener('click', e => {
    document.querySelectorAll('.mycanvas').forEach(w => {
        let index = w.getAttribute('data-index');

        w.setAttribute('style', 'display: none')
        
        if(e.target.parentElement.getAttribute('data-index') == index){
            w.setAttribute('style', 'display: block')
        }
    })

})

document.getElementById('charcoal__style').addEventListener('click', e => {
    document.querySelectorAll('.mycanvas').forEach(w => {
        let index = w.getAttribute('data-index');
        
        w.setAttribute('style', 'display: none')
        
        if(e.target.parentElement.getAttribute('data-index') == index){
            w.setAttribute('style', 'display: block')
        }
    })
})


// Brush colour and size
const colour = "#3d34a5";
const strokeWidth = 8;

// Drawing state
let latestPoint;
let drawing = false;

// Set up our drawing context
const canvas = document.getElementById("canvas2");
const context = canvas.getContext("2d");

// Drawing functions

const strokeBristle = (origin, destination, width) => {
  context.beginPath();
  context.moveTo(origin[0], origin[1]);
  context.strokeStyle = colour;
  context.lineWidth = width;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(destination[0], destination[1]);
  context.stroke();
};

const continueStroke = newPoint => {
  const bristleCount = Math.round(strokeWidth / 3);
  const gap = strokeWidth / bristleCount;
  for (let i = 0; i < bristleCount; i++) {
    strokeBristle(
      [latestPoint[0] + i * gap, latestPoint[1]],
      [newPoint[0] + i * gap, newPoint[1]],
      2
    );
  }
  latestPoint = newPoint;
};

// Event helpers

const startStroke = point => {
  drawing = true;
  latestPoint = point;
};

const getTouchPoint = evt => {
  if (!evt.currentTarget) {
    return [0, 0];
  }

  const rect = evt.currentTarget.getBoundingClientRect();
  const touch = evt.targetTouches[0];
  return [touch.clientX - rect.left, touch.clientY - rect.top];
};

const BUTTON = 0b01;
const mouseButtonIsDown = buttons => (BUTTON & buttons) === BUTTON;

// Event handlers

const mouseMove = evt => {
  if (!drawing) {
    return;
  }

  console.log(evt.target);
  continueStroke([evt.offsetX, evt.offsetY]);
};

const mouseDown = evt => {
  if (drawing) {
    return;
  }
  evt.preventDefault();
  canvas.addEventListener("mousemove", mouseMove, false);
  startStroke([evt.offsetX, evt.offsetY]);
};

const mouseEnter = evt => {
  if (!mouseButtonIsDown(evt.buttons) || drawing) {
    return;
  }
  mouseDown(evt);
};

const endStroke = evt => {
  if (!drawing) {
    return;
  }
  drawing = false;
  evt.currentTarget.removeEventListener("mousemove", mouseMove, false);
};

const touchStart = evt => {
  if (drawing) {
    return;
  }
  evt.preventDefault();
  startStroke(getTouchPoint(evt));
};

const touchMove = evt => {
  if (!drawing) {
    return;
  }
  continueStroke(getTouchPoint(evt));
};

const touchEnd = evt => {
  drawing = false;
};

// Register event handlers
canvas.addEventListener("touchstart", touchStart, false);
canvas.addEventListener("touchend", touchEnd, false);
canvas.addEventListener("touchcancel", touchEnd, false);
canvas.addEventListener("touchmove", touchMove, false);

canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mouseup", endStroke, false);
canvas.addEventListener("mouseout", endStroke, false);
canvas.addEventListener("mouseenter", mouseEnter, false);








// Set up our drawing context
const canvas2 = document.getElementById("canvas1");
const context2 = canvas2.getContext("2d");


// Drawing functions

const continueStroke2 = newPoint => {
  context2.beginPath();
  context2.moveTo(latestPoint[0], latestPoint[1]);
  context2.strokeStyle = colour;
  context2.lineWidth = strokeWidth;
  context2.lineCap = "round";
  context2.lineJoin = "round";
  context2.lineTo(newPoint[0], newPoint[1]);
  context2.stroke();

  latestPoint = newPoint;
};

// Event helpers

const startStroke2 = point => {
  drawing = true;
  latestPoint = point;
};

const getTouchPoint2 = evt => {
  if (!evt.currentTarget) {
    return [0, 0];
  }
  const rect = evt.currentTarget.getBoundingClientRect();
  const touch = evt.targetTouches[0];
  return [touch.clientX - rect.left, touch.clientY - rect.top];
};

const BUTTON2 = 0b01;
const mouseButtonIsDown2 = buttons => (BUTTON2 & buttons) === BUTTON2;

// Event handlers

const mouseMove2 = evt => {
  if (!drawing) {
    return;
  }

  console.log(evt);
  continueStroke2([evt.offsetX, evt.offsetY]);
};

const mouseDown2 = evt => {
  if (drawing) {
    return;
  }
  evt.preventDefault();
  canvas2.addEventListener("mousemove", mouseMove2, false);
  startStroke2([evt.offsetX, evt.offsetY]);
};

const mouseEnter2 = evt => {
  if (!mouseButtonIsDown2(evt.buttons) || drawing) {
    return;
  }
  mouseDown2(evt);
};

const endStroke2 = evt => {
  if (!drawing) {
    return;
  }
  drawing = false;
  evt.currentTarget.removeEventListener("mousemove", mouseMove2, false);
};

const touchStart2 = evt => {
  if (drawing) {
    return;
  }
  evt.preventDefault();
  startStroke2(getTouchPoint2(evt));
};

const touchMove2 = evt => {
  if (!drawing) {
    return;
  }
  continueStroke2(getTouchPoint2(evt));
};

const touchEnd2 = evt => {
  drawing = false;
};


// Register event handlers
canvas2.addEventListener("touchstart", touchStart2, false);
canvas2.addEventListener("touchend", touchEnd2, false);
canvas2.addEventListener("touchcancel", touchEnd2, false);
canvas2.addEventListener("touchmove", touchMove2, false);

canvas2.addEventListener("mousedown", mouseDown2, false);
canvas2.addEventListener("mouseup", endStroke2, false);
canvas2.addEventListener("mouseout", endStroke2, false);
canvas2.addEventListener("mouseenter", mouseEnter2, false);
