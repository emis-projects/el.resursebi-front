const checkBox = document.querySelectorAll(".cs-3-13-div-5-img-click-btn");
const resetBtn = document.getElementById("resetBtn");
const completedGame = document.getElementById("completedGame");

let count = 0;
let list = [];

checkBox.forEach((el) =>
  el.addEventListener("click", (e) => {
    list.push(e.target);
    list.forEach((e) => e.classList.add("active"));
    count++;
    if (count > 4) {
      list.shift();
      checkBox.forEach((e) => e.classList.remove("active"));
      list.forEach((e) => e.classList.add("active"));
    }
  })
);

resetBtn.addEventListener("click", () => {
  checkBox.forEach((el) => el.classList.remove("active"));
  list = []
});

completedGame.addEventListener("click", check);

function check() {
  let final = 0;
  list.forEach((elm) => {
    console.log(elm.dataset);
    if (elm.dataset.taget === "active" && list.length === 4) {
      final++
      if (final === 4) location.href = 'game-success-5.html'
    } else {
      elm.classList.remove("active");
      elm.classList.add("error");
    }
  });
}
