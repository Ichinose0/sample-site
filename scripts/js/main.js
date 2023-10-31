function subscribe() {
  alert("絶対しろよ");
}

function photos() {
  alert("そんなものあるわけねえよなぁ");
}

function calc() {
  let left_box = document.getElementById("left");
  let right_box = document.getElementById("right");
  let left = parseInt(left_box.value);
  let right = parseInt(right_box.value);
  
  let answer = document.getElementById("answer");
  answer.innerText = left+right;
}