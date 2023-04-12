let Answer = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value;

  if (input1 === "90") {
    Answer++;
    document.getElementById(
      "1"
    ).innerHTML = `<span class="correct" id="1">Correct</span>`;
  } else {
    document.getElementById(
      "1"
    ).innerHTML = `<span class="incorrect" id="1">Incorrect<a> (90)</a></span>`;
  }

  let input2 = document.getElementById("input2").value;

  if (input2 === "4") {
    Answer++;
    document.getElementById(
      "2"
    ).innerHTML = `<span class="correct" id="2">Correct</span>`;
  } else {
    document.getElementById(
      "2"
    ).innerHTML = `<span class="incorrect" id="2">Incorrect<a> (4)</a></span>`;
  }

  let input3 = document.getElementById("input3").value;

  if (input3 === "22") {
    Answer++;
    document.getElementById(
      "3"
    ).innerHTML = `<span class="correct" id="3">Correct</span>`;
  } else {
    document.getElementById(
      "3"
    ).innerHTML = `<span class="incorrect" id="3">Incorrect<a> (22)</a></span>`;
  }

  let input4 = document.getElementById("input4").value.toLowerCase();
  input4 = input4.toLowerCase();

  if (input4 === "england") {
    Answer++;
    document.getElementById(
      "4"
    ).innerHTML = `<span class="correct" id="4">Correct</span>`;
  } else {
    document.getElementById(
      "4"
    ).innerHTML = `<span class="incorrect" id="4">Incorrect<a> (England)</a></span>`;
  }

  let input5 = document.getElementById("input5").value.toLowerCase();
  input5 = input5.toLowerCase();

  if (input5 === "kickoff") {
    Answer++;
    document.getElementById(
      "5"
    ).innerHTML = `<span class="correct" id="5">Correct</span>`;
  } else {
    document.getElementById(
      "5"
    ).innerHTML = `<span class="incorrect" id="5">Incorrect<a> (Kickoff)</a></span>`;
  }

  if (Answer === 1) {
    document.getElementById("results").innerHTML = "1/5 (20%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  } else if (Answer === 2) {
    document.getElementById("results").innerHTML = "2/5 (40%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  } else if (Answer === 3) {
    document.getElementById("results").innerHTML = "3/5 (60%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  } else if (Answer === 4) {
    document.getElementById("results").innerHTML = "4/5 (80%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  } else if (Answer === 5) {
    document.getElementById("results").innerHTML = "5/5 (100%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  } else if (Answer === 0) {
    document.getElementById("results").innerHTML = "0/5 (0%)";
    document.getElementById("btn").removeEventListener("click", btnClicked);
  }
}
