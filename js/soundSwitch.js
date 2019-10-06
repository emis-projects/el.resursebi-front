/// Buuton to click
const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");

// Sound icon bg
const onCircle = soundOn.querySelector("circle");
const onIcon = soundOn.querySelector("#Path_1226");

// Sound icon inner path
const offCircle = soundOff.querySelector("circle");
const offIcon = soundOff.querySelector("#Path_1228");

soundOn.addEventListener("click", () => {
  if (onCircle.getAttribute("fill") === "#fff") {
    //change icon gb and path color for sound on
    onCircle.setAttribute("fill", "#7fd1d8");
    onIcon.setAttribute("fill", "#fff");
    //change icon gb and path color for sound on
    offCircle.setAttribute("fill", "#fff");
    offIcon.setAttribute("fill", "#7fd1d8");
  }
});

soundOff.addEventListener("click", () => {
  if (onCircle.getAttribute("fill") === "#7fd1d8") {
    //change icon gb and path color for sound off
    offCircle.setAttribute("fill", "#7fd1d8");
    offIcon.setAttribute("fill", "#fff");
    //change icon gb and path color for sound on
    onCircle.setAttribute("fill", "#fff");
    onIcon.setAttribute("fill", "#7fd1d8");
  }
});
