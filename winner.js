const cross_btn = document.querySelector(".cross-btn");
const rule_btn = document.querySelector(".rule-btn");
const game_rule = document.querySelector(".game-rule");

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
