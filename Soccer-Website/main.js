let Answer = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value;

  if (input1 === "90") {
    Answer + 1;
    document.getElementById("1").innerHTML = "Correct";
  } else {
    document.getElementById("1").innerHTML = "Incorrect";
  }

  let input2 = document.getElementById("input2").value;

  if (input2 === "2") {
    Answer + 1;
    document.getElementById("2").innerHTML = "Correct";
  } else {
    document.getElementById("2").innerHTML = "Incorrect";
  }

  let input3 = document.getElementById("input3").value;

  if (input3 === "22") {
    Answer + 1;
    document.getElementById("3").innerHTML = "Correct";
  } else {
    document.getElementById("3").innerHTML = "Incorrect";
  }

  let input4 = document.getElementById("input4").value.toLowerCase();
  input4 = input4.toLowerCase();

  if (input4 === "england") {
    Answer + 1;
    document.getElementById("4").innerHTML = "Correct";
  } else {
    document.getElementById("4").innerHTML = "Incorrect";
  }

  let input5 = document.getElementById("input5").value.toLowerCase();
  input5 = input5.toLowerCase();

  if (input5 === "kickoff") {
    Answer + 1;
    document.getElementById("5").innerHTML = "Correct";
  } else {
    document.getElementById("5").innerHTML = "Incorrect";
  }

  if (Answer === 1) {
    document.getElementById("results").innerHTML = "1/5 20%";
  } else if (Answer === 2) {
    document.getElementById("results").innerHTML = "2/5 40%";
  } else if (Answer === 3) {
    document.getElementById("results").innerHTML = "3/5 60%";
  } else if (Answer === 4) {
    document.getElementById("results").innerHTML = "4/5 80%";
  } else if (Answer === 5) {
    document.getElementById("results").innerHTML = "5/5 100%";
  } else if (Answer === 0) {
    document.getElementById("results").innerHTML = "0/5 0%";
  }
}
