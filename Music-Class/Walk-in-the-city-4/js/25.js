var circle = document.querySelectorAll(".class_music_4-img_25_circle img");
var boxes = document.querySelectorAll(".class_music_4-img_25_cont");
var boxOne = document.querySelectorAll(".box-1");
var boxtwo = document.querySelectorAll(".box-2");
var boxthree = document.querySelectorAll(".box-3");

window.onload = () => {
    console.log('fire');
    boxes.forEach((e) => {
        e.classList.remove("active");
        e.classList.remove("error");
        e.classList.remove("success");
        document.getElementById("completedGame").disabled = false;
      });
}

var store = [];

createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}

circle.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    handleLoadstop();
    console.log(evt);
    createjs.Sound.registerSound({
      src: `${evt.target.getAttribute("data-voice")}`,
      id: "sound",
    });
    handleLoadComplete();
  });
});

boxOne.forEach((elm) => {
  elm.addEventListener("click", () => {
    boxOne.forEach((e) => {
      e.classList.remove("active");
    });
    elm.classList.add("active");

    if (elm.dataset.type == 1) {
      store[0] = elm.dataset.type;
    } else {
      store[0] = "";
    }
  });
});

boxtwo.forEach((elm) => {
  elm.addEventListener("click", () => {
    boxtwo.forEach((e) => {
      e.classList.remove("active");
    });
    elm.classList.add("active");

    if (elm.dataset.type == 2) {
      store[1] = elm.dataset.type;
    } else {
      store[1] = "";
    }
  });
});

boxthree.forEach((elm) => {
  elm.addEventListener("click", () => {
    boxthree.forEach((e) => {
      e.classList.remove("active");
    });
    elm.classList.add("active");

    if (elm.dataset.type == 0) {
      store[2] = elm.dataset.type;
    } else {
      store[2] = "";
    }
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  store = [];
  boxes.forEach((e) => {
    e.classList.remove("active");
    e.classList.remove("error");
    e.classList.remove("success");
    document.getElementById("completedGame").disabled = false;
  });
});

document.getElementById("completedGame").addEventListener("click", () => {
  if (store.includes("") || store.length < 3) {
    check(boxOne, 1);
    check(boxtwo, 2);
    check(boxthree, 0);
  } else {
    console.log("fire");
    location.href = "game-success-25.html";
  }
  document.getElementById("completedGame").disabled = true;
});

function check(params, id) {
  params.forEach((e) => {
    if (e.classList.contains("active") && e.dataset.type != id) {
      e.classList.remove("active");
      e.classList.add("error");
    } else if (e.classList.contains("active")) {
      e.classList.remove("active");
      e.classList.add("success");
    }
  });
}
