let Results = document.getElementById("results");
let Answer = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value;

  if (input1 === "90") {
    Answer++;
    document.getElementById("1").innerHTML = "Correct";
  } else {
    document.getElementById("1").innerHTML = "Incorrect";
  }

  let input2 = document.getElementById("input2").value;

  if (input2 === "2") {
    Answer++;
    document.getElementById("2").innerHTML = "Correct";
  } else {
    document.getElementById("2").innerHTML = "Incorrect";
  }

  let input3 = document.getElementById("input3").value;

  if (input3 === "22") {
    Answer++;
    document.getElementById("3").innerHTML = "Correct";
  } else {
    document.getElementById("3").innerHTML = "Incorrect";
  }

  let input4 = document.getElementById("input4").value;
  input4 = input4.toLowerCase();

  if (input4 === "england") {
    Answer++;
    document.getElementById("4").innerHTML = "Correct";
  } else {
    document.getElementById("4").innerHTML = "Incorrect";
  }

  let input5 = document.getElementById("input5").value;
  input5 = input5.toLowerCase();

  if (input5 === "with a kickoff") {
    Answer++;
    document.getElementById("5").innerHTML = "Correct";
  } else {
    document.getElementById("5").innerHTML = "Incorrect";
  }

  if (Answer === 1) {
    Results.innerHTML = "1/5 20%";
  } else if (Answer === 2) {
    Results.innerHTML = "2/5 40%";
  } else if (Answer === 3) {
    Results.innerHTML = "3/5 60%";
  } else if (Answer === 4) {
    Results.innerHTML = "4/5 80%";
  } else if (Answer === 5) {
    Results.innerHTML = "5/5 100%";
  } else if (Answer === 0) {
    Results.innerHTML = "0/5 0%";
  }
}
