let sequence = [];
const seqButton = ["green", "red", "yellow", "blue"];
let level = 1;
let color;

const greenButton = $("#green");
const redButton = $("#red");
const yellowButton = $("#yellow");
const blueButton = $("#blue");

function nextSequence() {
  let num = Math.floor(Math.random() * 4);
  let color = seqButton[num];
  sequence.push(color);
  level++;

  $("#${color}").fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/${color}.mp3");
  audio.play();
}

function check() {
  for (let i = 0; i < level; i++) {
    $(".btn").on("click", function () {
      let clickedButton = $(this).attr("id");
      
      $(".${clickedButton}").addClass(".pressed");
      setInterval($(".${clickedButton}").removeClass(".pressed"));
      let clickedAudio = new Audio("sounds/${clickedButton}.mp3");
      audio.play();

      if (clickedButton != sequence[i]) {
        let wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        reset();
      }
    });
  }
}

function reset() {
  level = 1;
  sequence = [];
}
function play() {
  nextSequence();
  check();
}

$(document).keydown(function (event) {
  play();
});
