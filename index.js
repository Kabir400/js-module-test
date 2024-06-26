//getting dom elements-->
const com_score_ele = document.querySelector(".computer-score");
const user_score_ele = document.querySelector(".user-score");
const play_btn = document.querySelectorAll(".play-btn");
const game_rule = document.querySelector(".game-rule");
const cross_btn = document.querySelector(".cross-btn");
const rule_btn = document.querySelector(".rule-btn");

const play_box = document.querySelector(".play-box");
const result_box = document.querySelector(".result-container");
const result_sub_title = document.querySelector(".result-sub-title");
const result = document.querySelector(".result");
const game_element_you = document.querySelector(".game-element-you");
const game_element_pc = document.querySelector(".game-element-pc");
const element_img_you = document.querySelector(".element-img-you");
const element_img_pc = document.querySelector(".element-img-pc");
const wincircle_you = document.querySelector(".wincircle-you");
const wincircle_pc = document.querySelector(".wincircle-pc");
const result_title = document.querySelector(".result-title");
const result_btn = document.querySelector(".result-btn");
const next_btn = document.querySelector(".next-btn");

// ....................................................

//initial score-->
let com_score = Number(localStorage.getItem("computer-score")) || 0;
let user_score = Number(localStorage.getItem("user_score")) || 0;

// ....................................................

//imagining
// 0--->rock
// 1---->paper
// 2---->seassor

// ....................................................

//initialization--(user and com score)
com_score_ele.textContent = com_score;
user_score_ele.textContent = user_score;

// ....................................................

//functions-->

//genrating random number
const genRandom = () => {
  return Math.floor(Math.random() * 3);
};
// ....................................................

const incCom = () => {
  com_score++;
  localStorage.setItem("computer-score", com_score);
  com_score_ele.textContent = com_score;
};

// ....................................................

const incUser = () => {
  user_score++;
  localStorage.setItem("user_score", user_score);
  user_score_ele.textContent = user_score;
};

// ....................................................

//change dom (draw)
const changeDraw = (your_choice) => {
  play_box.style.display = "none";
  result_box.style.display = "flex";
  result_sub_title.style.display = "none";
  result.style.gap = "30px";
  result_title.textContent = "TIE UP";
  wincircle_pc.style.display = "none";
  wincircle_you.style.display = "none";
  result_btn.textContent = "REPLAY";

  if (your_choice == "rock") {
    element_img_pc.src = "./assets/rock_icon.png";
    element_img_you.src = "./assets/rock_icon.png";
    game_element_you.style.backgroundImage = "url(./assets/blue_ring.png)";
    game_element_pc.style.backgroundImage = "url(./assets/blue_ring.png)";
  } else if (your_choice == "paper") {
    element_img_pc.src = "./assets/paper_icon.png";
    element_img_you.src = "./assets/paper_icon.png";
    game_element_you.style.backgroundImage = "url(./assets/yellow_ring.png)";
    game_element_pc.style.backgroundImage = "url(./assets/yellow_ring.png)";
  } else {
    element_img_pc.src = "./assets/seassor_icon.png";
    element_img_you.src = "./assets/seassor_icon.png";
    game_element_you.style.backgroundImage = "url(./assets/purple_ring.png)";
    game_element_pc.style.backgroundImage = "url(./assets/purple_ring.png)";
  }
};

// ....................................................

//change dom Win
const changeWin = (your_choice, pc_choice, com_val) => {
  play_box.style.display = "none";
  result_box.style.display = "flex";
  result.style.gap = "10px";
  result_sub_title.style.display = "block";
  result_title.textContent = "YOU WIN";
  wincircle_you.style.display = "block";
  wincircle_pc.style.display = "none";
  result_btn.textContent = "PLAY AGAIN";
  next_btn.style.display = "block";
  rule_btn.style.right = "113px";

  //putting user choice
  element_img_you.src = `./assets/${your_choice}_icon.png`;
  element_img_pc.src = `./assets/${pc_choice}_icon.png`;

  //putting computer choice-->
  if (pc_choice == "rock") {
    game_element_pc.style.backgroundImage = "url(./assets/blue_ring.png)";
  } else if (pc_choice == "paper") {
    game_element_pc.style.backgroundImage = "url(./assets/yellow_ring.png)";
  } else {
    game_element_pc.style.backgroundImage = "url(./assets/purple_ring.png)";
  }

  //putting user choice ring-->

  if (your_choice == "rock") {
    game_element_you.style.backgroundImage = "url(./assets/blue_ring.png)";
  } else if (your_choice == "paper") {
    game_element_you.style.backgroundImage = "url(./assets/yellow_ring.png)";
  } else {
    game_element_you.style.backgroundImage = "url(./assets/purple_ring.png)";
  }
};

// ..................................................

//change lost
const changeLost = (your_choice, pc_choice) => {
  play_box.style.display = "none";
  result_box.style.display = "flex";
  result.style.gap = "10px";
  result_sub_title.style.display = "block";
  result_title.textContent = "YOU LOST";
  wincircle_pc.style.display = "block";
  wincircle_you.style.display = "none";
  result_btn.textContent = "PLAY AGAIN";

  //putting user choice
  element_img_you.src = `./assets/${your_choice}_icon.png`;
  element_img_pc.src = `./assets/${pc_choice}_icon.png`;

  //putting computer choice-->
  if (pc_choice == "rock") {
    game_element_pc.style.backgroundImage = "url(./assets/blue_ring.png)";
  } else if (pc_choice == "paper") {
    game_element_pc.style.backgroundImage = "url(./assets/yellow_ring.png)";
  } else {
    game_element_pc.style.backgroundImage = "url(./assets/purple_ring.png)";
  }

  //putting user choice ring-->

  if (your_choice == "rock") {
    game_element_you.style.backgroundImage = "url(./assets/blue_ring.png)";
  } else if (your_choice == "paper") {
    game_element_you.style.backgroundImage = "url(./assets/yellow_ring.png)";
  } else {
    game_element_you.style.backgroundImage = "url(./assets/purple_ring.png)";
  }
};

// ....................................................

//main logic-->

play_btn.forEach((item) => {
  item.addEventListener("click", () => {
    const com_val = genRandom();

    if (
      (item.id == "rock" && com_val == 0) ||
      (item.id == "paper" && com_val == 1) ||
      (item.id == "seassor" && com_val == 2)
    ) {
      changeDraw(item.id);
    } else if (
      (item.id == "rock" && com_val == 1) ||
      (item.id == "paper" && com_val == 2) ||
      (item.id == "seassor" && com_val == 0)
    ) {
      if (com_val == 0) {
        changeLost(item.id, "rock");
        incCom();
      } else if (com_val == 1) {
        changeLost(item.id, "paper");
        incCom();
      } else {
        changeLost(item.id, "seassor");
        incCom();
      }
    } else if (
      (item.id == "rock" && com_val == 2) ||
      (item.id == "paper" && com_val == 0) ||
      (item.id == "seassor" && com_val == 1)
    ) {
      if (com_val == 0) {
        changeWin(item.id, "rock");
        incUser();
      } else if (com_val == 1) {
        changeWin(item.id, "paper");
        incUser();
      } else {
        changeWin(item.id, "seassor");
        incUser();
      }
    }
  });
});

// ....................................................

//logic for showing game rules-->
cross_btn.addEventListener("click", () => {
  game_rule.style.display = "none";
});

rule_btn.addEventListener("click", () => {
  if (game_rule.style.display == "block") {
    game_rule.style.display = "none";
  } else {
    game_rule.style.display = "block";
  }
});

// ....................................................

result_btn.addEventListener("click", () => {
  play_box.style.display = "block";
  result_box.style.display = "none";
  next_btn.style.display = "none";
  rule_btn.style.right = "28px";
});

// ....................................................
